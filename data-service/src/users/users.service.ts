import { Injectable, NotFoundException } from '@nestjs/common';

import { SignupUserDto } from './dto/signup-user.dto';
import { UserRepository } from './user.respository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

const users = [
  {
    id: '1',
    name: 'Angela',
  },
  {
    id: '2',
    name: 'Dwight',
  },
];

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getUser(id: number) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async getUsers() {
    const users = await this.userRepository.find();

    return users;
  }

  async signupUser(signupUserDto: SignupUserDto) {
    const { name } = signupUserDto;
    const user = new User();

    user.name = name;

    await user.save();

    return user;
  }
}
