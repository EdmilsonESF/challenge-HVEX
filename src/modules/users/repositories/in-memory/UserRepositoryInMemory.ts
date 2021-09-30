import { IUser } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UserRepositoryInMemory implements IUsersRepository {
  users: IUser[] = [];

  async create({ name, userName, password }: IUser): Promise<IUser> {
    const user = {} as IUser;

    Object.assign(user, {
      id: String(Math.floor(Math.random() * (10 - 1 + 1) + 1)),
      name,
      userName,
      password,
      lastAccess: new Date(Date.now()),
    });

    this.users.push(user);
    return user;
  }

  async update({ id, name, password, userName }: IUser): Promise<IUser> {
    const user = this.users.find((user) => user.id === id);

    Object.assign(user, {
      name,
      userName,
      password,
    });

    return user;
  }

  async findByUserName(userName: string): Promise<IUser> {
    const user = this.users.find((user) => user.userName === userName);

    return user;
  }

  async findById(id: string): Promise<IUser> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    this.users.splice(userIndex);
  }
}

export { UserRepositoryInMemory };
