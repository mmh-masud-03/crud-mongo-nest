import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schema/book.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  async findAllBooks(): Promise<Book[]> {
    const books = await this.bookModel.find().exec();
    return books;
  }

  async createBook(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book);
    return newBook.save();
  }
}
