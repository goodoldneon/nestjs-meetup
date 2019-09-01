import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  getUsers() {
    return this.userRepository.find();
  }

  async createUser(userData) {
    const user = new User();

    user.name = userData.name;
    user.house = userData.house;

    await user.save();

    return user;
  }
}
