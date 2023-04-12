import { User } from '@/entities/User';

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'created'
}

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export type ArticleTypes = ArticleType[];

export enum ArticleBLockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE'
}

export enum ArticleView {
  LIST = 'LIST',
  TILE = 'TILE'
}

interface ArticleBlockBase {
  id: number;
  type: ArticleBLockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBLockType.TEXT;
  paragraphs: string[];
  title: string;

}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBLockType.CODE;
  code: string;

}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBLockType.IMAGE;
  src: string;
  title: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export type ArticleBlocks = ArticleBlock[];

export interface Article {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTypes;
  blocks: ArticleBlocks;
  user: User;
}

export type Articles = Article[];
