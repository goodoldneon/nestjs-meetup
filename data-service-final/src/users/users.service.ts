import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getUsers() {
    return this.userRepository.find();
  }

  async getUser(id) {
    return this.userRepository.findOne(id);
  }

  async createUser(createUserDto: CreateUserDto) {
    const { name } = createUserDto;
    const user = new User();

    user.name = name;

    await user.save();

    return user;
  }
}
