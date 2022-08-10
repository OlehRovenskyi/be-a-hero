import { IsOptional, IsString } from 'class-validator';

export class GetUserFilterDto {
  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsString()
  public search?: string;
}
