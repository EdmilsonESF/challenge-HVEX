import { IUser } from "../entities/User";

interface IUsersRepository {
  create({ name, userName, password }: IUser): Promise<IUser>;
  update({ id, name, password, userName }: IUser): Promise<IUser>;
  findByUserName(userName: string): Promise<IUser>;
  findById(id: string): Promise<IUser>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };
