import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiModelProperty({ example: 'Angela' })
  @IsString()
  name: string;
}
