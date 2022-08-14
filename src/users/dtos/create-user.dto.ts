import { USER_ROLE } from '../users.model';

export class CreateUserDto {
  public name: string;
  public age: number;
  public role: USER_ROLE;
  public active: boolean;
}
