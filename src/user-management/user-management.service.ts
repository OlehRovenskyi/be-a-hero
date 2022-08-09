import { Injectable } from '@nestjs/common';

@Injectable()
export class UserManagementService {
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
