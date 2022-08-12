import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { USER_ROLE } from './types/users.type';

const mockRepository = () => ({
  getById: jest.fn(),
});

describe('UsersService', () => {
  let service: UsersService;
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return user by id', async () => {
    const user = {
      id: 'test',
      name: 'Vic',
      age: 13,
      active: true,
      role: USER_ROLE.STUDENT,
      created_at: new Date(),
      updated_at: new Date(),
    };

    jest.spyOn(repository, 'getById').mockImplementation(() => (Promise.resolve(user)));

    const res = await service.getUserById('test');
    expect(res).toEqual(user);
    expect(repository.getById).toHaveBeenCalledWith('test');
  });
});
