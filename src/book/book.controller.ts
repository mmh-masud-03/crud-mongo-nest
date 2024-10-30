import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get()
  async getBooks(): Promise<Book[]> {
    return this.bookService.findAllBooks();
  }

  @Post()
  async createBook(
    @Body()
    createBookDto: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.createBook(createBookDto);
  }
}
