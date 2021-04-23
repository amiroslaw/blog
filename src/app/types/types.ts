export class Tag {
  constructor(name: string, slug: string) {
  this.name = name;
  this.slug = slug;
}
name: string;
  slug: string;
}

export class TagWeight extends Tag {
  constructor(name: string, slug: string, counter: number) {
    super(name, slug);
    this.counter = counter;
  }
  counter: number;
}

export class SearchItem {
  title: string;
  description?: string;
  url: string;
  tag: string;
}

export enum ContentType {
  ARTICLE = 'ARTICLE',
  LINK = 'LINK',
}
