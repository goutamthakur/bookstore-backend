import { Injectable } from '@nestjs/common';
import { BookDto } from 'libs/contracts/books/book.dto';
import { CreateBookDto } from 'libs/contracts/books/create-book.dto';
import { UpdateBookDto } from 'libs/contracts/books/update-book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      name: 'Title 1',
      author: 'Author 1',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Title 2',
      author: 'Author 2',
      rating: 4.8,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    };

    this.books.push(newBook);

    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book with data`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
