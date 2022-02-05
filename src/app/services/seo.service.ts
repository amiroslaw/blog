import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Metadata, ScullyContentService} from './scully-content.service';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  defaultMetadata: Metadata = {
    title: 'Mirosław',
    description: 'Blog o programowaniu i Linuksie',
    authors: ['Arkadiusz Mirosław'],
    publishedAt: '',
    tags: ['programowanie', 'linux', 'java'],
    image: 'assets/img/sites/home-bg.jpg',
    route: ''
  };

  constructor(private meta: Meta, private title: Title, private scullyContent: ScullyContentService) {
  }

  generateMetaTags() {
    this.scullyContent.getMetadata().subscribe(date => {
        if (date.publishedAt == null) {
          date = this.defaultMetadata;
        }
        this.setTitle(date.title);
        this.setDescription(date.description);
        this.updateKeywords(date.tags);
        this.openGraph(date);
      }
    );
  }

  setTitle(title: string) {
    this.title.setTitle(title ?? this.defaultMetadata.title);
  }

  setDescription(description: string) {
    this.meta.updateTag({name: 'description', content: description ?? this.defaultMetadata.description});
  }

  updateKeywords(keywords: string[]) {
    this.meta.updateTag({name: 'keywords', content: keywords.join(', ')});
  }

  private openGraph(config: Metadata) {
    this.meta.updateTag({property: 'og:title', content: config.title});
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    this.meta.updateTag({
      property: 'og:url',
      content: `${environment.url}${config.route}`,
    });

    this.meta.updateTag({name: 'twitter:card', content: 'summary_large_image'});
    this.meta.updateTag({
      property: 'og:image',
      content: SeoService.absoluteImageUrl(config.image),
    });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: config.description,
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: this.defaultMetadata.title
    });
    this.meta.updateTag({
      property: 'og:locale',
      content: 'pl_PL',
    });

    if (config.publishedAt) {
      this.meta.updateTag({property: 'og:type', content: 'article'});
      this.meta.updateTag({
        property: 'og:type',
        content: 'article',
      });

      this.meta.updateTag({
        property: `og:article:published_time`,
        content: config.publishedAt,
      });
      this.meta.updateTag({
        property: `og:article:tag`,
        content: config.tags.join(', '),
      });
      this.meta.updateTag({
        property: `og:article:author`,
        content: config.authors.join(', '),
      });

      return;
    } else {
      this.meta.removeTag('property="og:article:published_time"');
      this.meta.removeTag('property="og:article:tag"');
      this.meta.removeTag('property="og:article:author"');
      this.meta.updateTag({property: 'og:type', content: 'website',});
    }
  }

  private static absoluteImageUrl(image: string) {
    return `${environment.url}/${image}`;
  }
}

