import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IUser } from '../interfaces/user';
import { CreateUserDto } from '../dtos/users/request/createUsers-request.dto';
import { UpdateUserDto } from 'src/dtos/users/request/updateUser-request.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private UserModel: Model<IUser>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return this.UserModel.find().exec();
  }

  async findById(id: string): Promise<IUser> {
    const user = await this.UserModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const updatedUser = await this.UserModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    if (!updatedUser) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return updatedUser;
  }

  async delete(id: string): Promise<void> {
    const deletedUser = await this.UserModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException('Usuario no encontrado');
    }
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await this.UserModel.findOne({ email }).exec();
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }

}