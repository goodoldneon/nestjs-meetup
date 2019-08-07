import { ApiModelProperty } from '@nestjs/swagger';

export class SignupUserDto {
  @ApiModelProperty({ example: 'Jim' })
  name: string;
}
