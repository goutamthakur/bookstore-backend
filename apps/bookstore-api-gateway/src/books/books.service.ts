import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { BOOKS_PATTERNS } from 'libs/contracts/books/books.patterns';
import { CreateBookDto as ClientCreateBookDto } from 'libs/contracts/books/create-book.dto';
import { UpdateBookDto as ClientUpdateBookDto } from 'libs/contracts/books/update-book.dto';
import { BookDto as ClientBookDto } from 'libs/contracts/books/book.dto';
import { map } from 'rxjs';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private booksClient: ClientProxy) {}

  private mapBookDto(bookDto: ClientCreateBookDto): CreateBookDto {
    return {
      name: bookDto.name,
      author: bookDto.author,
      rating: bookDto.rating,
    };
  }

  create(createBookDto: CreateBookDto) {
    return this.booksClient
      .send<
        ClientBookDto,
        ClientCreateBookDto
      >(BOOKS_PATTERNS.CREATE, createBookDto)
      .pipe(map(this.mapBookDto));
  }

  findAll() {
    return this.booksClient.send('books.findAll', {});
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
