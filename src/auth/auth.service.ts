import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async singin(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    console.log(user);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const isPasswordMatched = await bcrypt.compare(password, user?.password);
    if (!isPasswordMatched)
      throw new UnauthorizedException('Invalid credentials');
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    const { password: _, ...result } = user;
    return { result, token };
  }
}
