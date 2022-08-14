import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userManagementService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<any[]> {
    return this.userManagementService.getAllUsers();
  }
}
