import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UsersDocument = UserLogin & Document ;
@Schema() 
export class UserLogin{


@Prop()
  id:string;

  @Prop()
  username:string;

  @Prop()
  password:string;
}

export const UserSchema = SchemaFactory.createForClass(UserLogin);