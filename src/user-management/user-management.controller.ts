import { Controller, Get } from '@nestjs/common';
import { UserManagementService } from './user-management.service';

@Controller('user-management')
export class UserManagementController {
  constructor(private userManagementService: UserManagementService) {}

  @Get()
  async getAllUsers(): Promise<any[]> {
    return this.userManagementService.getAllUsers();
  }
}
