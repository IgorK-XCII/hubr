export type ArticleTypes = string[];

export enum ArticleBLockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE'
}

interface ArticleBlock {
  id: number;
  type: ArticleBLockType;
}

interface ArticleTextBlock extends ArticleBlock {
  type: ArticleBLockType.TEXT;
  paragraphs: string[];
  title: string;

}

interface ArticleCodeBlock extends ArticleBlock {
  type: ArticleBLockType.CODE;
  paragraphs: string[];

}

interface ArticleImageBlock extends ArticleBlock {
  type: ArticleBLockType.IMAGE;
  src: string;
  title: string;
}

type ArticleBlocks = Array<ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock>;

export interface Article {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTypes;
  blocks: ArticleBlocks;
}
