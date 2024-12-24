import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserEntity extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
