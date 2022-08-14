import { USER_ROLE } from '../users.model';

export class UpdateUserDto {
  public name: string;
  public age: number;
  public role: USER_ROLE;
  public active: boolean;
}
