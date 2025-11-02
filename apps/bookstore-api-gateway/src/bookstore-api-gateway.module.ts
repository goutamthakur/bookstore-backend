import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { ClientConfigModule } from './client-config/client-config.module';

@Module({
  imports: [UsersModule, BooksModule, ClientConfigModule],
})
export class BookstoreApiGatewayModule {}
