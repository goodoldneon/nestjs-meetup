import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignupUserDto {
  @ApiModelProperty({ example: 'Jim' })
  @IsString()
  name: string;
}
