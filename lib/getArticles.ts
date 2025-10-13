import article from '../data/article.json'
import { Article } from '@/interfaces/article';

export async function getArticles() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return article as Article[];
}
