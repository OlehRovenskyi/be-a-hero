import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { User } from './user-management.model';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserFilterDto } from './dtos/get-user-filter.dto';

@Controller('user-management')
export class UserManagementController {
  constructor(private userManagementService: UserManagementService) {}

  // @Get()
  // async getAllUsers(): Promise<User[]> {
  //   return this.userManagementService.getAllUsers();
  // }

  @Get()
  async getUsers(@Query() filterDto: GetUserFilterDto): Promise<User[]> {
    if (Object.keys(filterDto).length) {
      return this.userManagementService.getUsersWithTasks(filterDto);
    } else {
      return this.userManagementService.getAllUsers();
    }
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userManagementService.getUserById(id);
  }

  @Delete('/:id')
  async deleteUserById(@Param('id') id: string): Promise<void> {
    return this.userManagementService.deleteUserById(id);
  }

  @Put('/:id')
  async putUserById(
    @Param('id') id: string,
    @Body() body: CreateUserDto,
  ): Promise<User> {
    return this.userManagementService.putUserById(id, body);
  }

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.userManagementService.createUser(body);
  }
}
