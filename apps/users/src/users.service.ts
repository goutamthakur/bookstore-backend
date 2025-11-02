import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 34,
    },
    {
      id: 2,
      name: 'Alice Wilderson',
      age: 26,
    },
  ];

  // TODO: Get data from db
  findAll() {
    return this.users;
  }
}
