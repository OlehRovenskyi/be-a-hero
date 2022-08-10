import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserFilterDto } from './dtos/get-user-filter.dto';
import { User } from './user.entity';

@Controller('user-management')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers(@Query() filterDto: GetUserFilterDto): Promise<User[]> {
    return this.usersService.getUsers(filterDto);
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.createUser(body);
  }

  @Delete('/:id')
  async deleteUserById(@Param('id') id: string): Promise<void> {
    return this.usersService.deleteUserById(id);
  }

  @Put('/:id')
  async putUserById(
    @Param('id') id: string,
    @Body() body: CreateUserDto,
  ): Promise<User> {
    return this.usersService.putUserById(id, body);
  }

  // @Get()
  // async getAllUsers(): Promise<User[]> {
  //   return this.userManagementService.getAllUsers();
  // }

  // @Get()
  // async getUsers(@Query() filterDto: GetUserFilterDto): Promise<User[]> {
  //   if (Object.keys(filterDto).length) {
  //     return this.userManagementService.getUsersWithTasks(filterDto);
  //   } else {
  //     return this.userManagementService.getAllUsers();
  //   }
  // }
  //
  // @Get('/:id')
  // async getUserById(@Param('id') id: string): Promise<User> {
  //   return this.userManagementService.getUserById(id);
  // }
  //
  // @Delete('/:id')
  // async deleteUserById(@Param('id') id: string): Promise<void> {
  //   return this.userManagementService.deleteUserById(id);
  // }
  //
  // @Put('/:id')
  // async putUserById(
  //   @Param('id') id: string,
  //   @Body() body: CreateUserDto,
  // ): Promise<User> {
  //   return this.userManagementService.putUserById(id, body);
  // }
  //
  // @Post()
  // async createUser(@Body() body: CreateUserDto): Promise<User> {
  //   return this.userManagementService.createUser(body);
  // }
}
