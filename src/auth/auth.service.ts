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
  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched)
      throw new UnauthorizedException('Invalid credentials');
    const payload = { email: user.email, sub: user.id, role: user.role };
    const token = this.jwtService.sign(payload);
    return { username: user.username, id: user._id, email: user.email, token };
  }
}
