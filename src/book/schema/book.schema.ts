import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export enum Category {
  FICTION = 'fiction',
  NON_FICTION = 'non-fiction',
  SCIENCE_FICTION = 'science-fiction',
  MYSTERY = 'mystery',
  HORROR = 'horror',
  ROMANCE = 'romance',
  THRILLER = 'thriller',
  BIOGRAPHY = 'biography',
  AUTOBIOGRAPHY = 'autobiography',
  HISTORY = 'history',
}
@Schema({ timestamps: true })
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
