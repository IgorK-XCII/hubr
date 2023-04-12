import { ArticleCommentsSchema } from './articleCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './articleDetailsPageRecomendationsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleCommentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
