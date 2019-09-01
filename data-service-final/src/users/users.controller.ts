import { Controller, Get, Post, Body } from '@nestjs/common';
import {
  ApiModelProperty,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { UsersService } from './users.service';

class UserDto {
  @ApiModelProperty({ example: 'Arya' })
  @IsString()
  name: string;

  @ApiModelProperty({ example: 'Stark' })
  @IsString()
  house: string;
}

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOkResponse({ type: [UserDto] })
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  @ApiCreatedResponse({ type: UserDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  createUser(@Body() body: UserDto) {
    const newUser = body;

    return this.usersService.createUser(newUser);
  }
}
