import { Controller, Get, Param, Post, Body } from '@nestjs/common';

import { SignupUserDto } from './dto/signup-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.getUser(id);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  signupUser(@Body() signupUserDto: SignupUserDto) {
    return this.usersService.signupUser(signupUserDto);
  }
}
