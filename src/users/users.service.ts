import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      name: 'Vic',
      age: 30,
      role: 'teacher',
      active: true,
    },
  ];

  public getAllUsers() {
    return this.users;
  }
}
