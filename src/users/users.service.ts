import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: '1', name: 'injectable service' }];

  findAll() {
    return this.users;
  }
}
