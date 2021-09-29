/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

import { mongoose } from "../../../database";

interface IUser {
  id?: string;
  name: string;
  userName: string;
  password: string;
  lastAccess?: Date;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastAccess: {
      type: Date,
      default: new Date(Date.now()),
    },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      },
    },
  }
);

const User = mongoose.model<IUser>("Users", UserSchema);

export { User, IUser };
