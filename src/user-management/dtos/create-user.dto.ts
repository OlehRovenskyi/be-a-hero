import { USER_ROLE } from '../user-management.model';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @MaxLength(100)
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  public name: string;

  @Max(200)
  @Min(0)
  @IsNumber()
  public age: number;

  @IsEnum(USER_ROLE)
  @IsNotEmpty()
  public role: USER_ROLE;

  @IsBoolean()
  public active: boolean;
}
