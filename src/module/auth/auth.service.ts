import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.login(username, pass);
    const isMatch = await bcrypt.compare(pass, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(loginUserDto: LoginUserDto) {
    const payload = { email: loginUserDto.email, sub: loginUserDto.password };
    const user = await this.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );
    if (user === null)
      throw new HttpException('Incorrect password', HttpStatus.NOT_FOUND);
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
