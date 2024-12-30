import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserEntity.name) private userModel: Model<UserEntity>) {

  }

  async create(userDto: Partial<UserEntity>): Promise<UserEntity> {
    const user = new this.userModel(userDto);
    return user.save();
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, userDto: Partial<UserEntity>): Promise<UserEntity> {
    try {
      const user = await this.userModel.findByIdAndUpdate(id, userDto, { new: true }).exec();
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (e) {
      throw new NotFoundException('User not found');
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const result = await this.userModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('User not found');
      }
    } catch (e) {
      throw new NotFoundException('User not found');
    }
  }
}
