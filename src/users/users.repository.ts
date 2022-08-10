import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserFilterDto } from './dtos/get-user-filter.dto';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import { UpdateUserDto } from './dtos/update-user.dto';

export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers(filterDto: GetUserFilterDto): Promise<User[]> {
    const { name, search } = filterDto;

    const query = this.usersRepository.createQueryBuilder('user');

    if (name) {
      query.andWhere('user.name = :name', { name });
    }

    if (search) {
      query.andWhere('LOWER(user.name) LIKE LOWER(:search)', {
        search: `%${search}%`,
      });
    }

    return query.getMany();
  }

  public async getById(id): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create({
      ...createUserDto,
    });

    await this.usersRepository.save(user);

    return user;
  }

  public async delete(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }

  public async save(user: UpdateUserDto): Promise<User> {
    return this.usersRepository.save(user);
  }
}
