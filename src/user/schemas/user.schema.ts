import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export enum Role{
    SuperAdmin = 'superadmin',
    Admin='admin',
    User='user',
}
@Schema({ timestamps: true })
export class User {
  @Prop()
  @IsString()
  @IsNotEmpty()
  username: string;

  @Prop()
  @IsEmail()
  @IsNotEmpty()
  email:string;

  @Prop()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @Prop()
  role: Role;

 
}

export const UserSchema=SchemaFactory.createForClass(User);