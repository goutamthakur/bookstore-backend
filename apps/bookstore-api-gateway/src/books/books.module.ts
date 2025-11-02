import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientConfigModule } from '../client-config/client-config.module';
import { BOOKS_CLIENT } from './constant';
import { ClientConfigService } from '../client-config/client-config.service';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [ClientConfigModule],
  controllers: [BooksController],
  providers: [
    BooksService,
    {
      provide: 'BOOKS_CLIENT',
      useFactory: (configService: ClientConfigService) => {
        const clientOptions = configService.booksClientOptions;
        return ClientProxyFactory.create(clientOptions);
      },
      inject: [ClientConfigService],
    },
  ],
})
export class BooksModule {}
