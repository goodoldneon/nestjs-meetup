import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiModelProperty({ example: 'Angela' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
