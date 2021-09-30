import { User, IUser } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  async create({ name, userName, password }: IUser): Promise<IUser> {
    const user = await User.create({
      name,
      userName,
      password,
    });

    return user;
  }

  async findByUserName(userName: string): Promise<IUser> {
    const user = await User.findOne({ userName });
    return user;
  }

  async update({ id, name, userName, password }: IUser): Promise<IUser> {
    await User.updateOne(
      { _id: id },
      { name, userName, password, lastAccess: new Date(Date.now()) }
    );

    const user = await User.findOne({ userName });

    return user;
  }

  async findById(id: string): Promise<IUser> {
    const user = await User.findOne({ _id: id });

    return user;
  }

  async delete(id: string): Promise<void> {
    await User.findByIdAndRemove(id);
  }
}

export { UsersRepository };
