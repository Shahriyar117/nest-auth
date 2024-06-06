import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signUp(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({
      username,
      email,
      password: hashedPassword,
    });

    return user.save();
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      console.log('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Invalid credentials');
    }

    return user;
  }

  async signIn(user: User) {
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
