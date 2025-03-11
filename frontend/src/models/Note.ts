import { Category } from './category';

export interface Note {
  id: number;
  title: string;
  content: string;
  archived: boolean;
  category: Category;
}

export interface NoteReqDTO {
  title: string;
  content?: string;
  archived: boolean;
  categoryId: number;
}