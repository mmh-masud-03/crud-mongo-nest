import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret key',
    });
  }
  async validate(payload: any) {
    console.log('payload of jwt from jwt strategy', payload);
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
