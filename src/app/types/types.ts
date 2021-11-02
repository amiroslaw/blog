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

export class PortfolioCard {
  private _title: string;
  private _cardImgPath: string;
  private _project: URL | PortfolioModal;
  private _caption: string;

  get title(): string {
    return this._title;
  }

  get cardImgPath(): string {
    return this._cardImgPath;
  }

  get project(): URL | PortfolioModal {
    return this._project;
  }

  get caption(): string {
    return this._caption;
  }

  constructor(title: string, caption: string, cardImgPath: string, project: URL | PortfolioModal) {
    this._cardImgPath = cardImgPath;
    this._project = project;
    this._title = title;
    this._caption = caption;
  }
}

export class PortfolioModal {
  private _description: string;
  private _screenshotsPath?: string[];
  private _features?: string[];
  private _technology?: string;
  private _repositoryUrl?: URL;
  private _projectUrl: URL;

  get projectUrl(): URL {
    return this._projectUrl;
  }

  get description(): string {
    return this._description;
  }

  get screenshotsPath(): string[] {
    return this._screenshotsPath;
  }

  get features(): string[] {
    return this._features;
  }

  get technology(): string {
    return this._technology;
  }

  get repositoryUrl(): URL {
    return this._repositoryUrl;
  }

  constructor({description, screenshotsPath, features, technology, repositoryUrl, projectUrl}:
                { description: string, screenshotsPath?: string[], features?: string[], technology?: string, repositoryUrl?: URL, projectUrl?: URL }) {
    this._screenshotsPath = screenshotsPath;
    this._description = description;
    this._features = features;
    this._technology = technology;
    this._repositoryUrl = repositoryUrl;
    this._projectUrl = projectUrl;
  }

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
