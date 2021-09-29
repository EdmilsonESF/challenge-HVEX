import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUser } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id, name, userName, password }: IUser): Promise<IUser> {
    const userAlreadyExists = await this.usersRepository.findById(id);

    if (!userAlreadyExists) {
      throw new AppError("User not found", 404);
    }

    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.update({
      id,
      name,
      userName,
      password: passwordHash,
    });

    return user;
  }
}

export { UpdateUserUseCase };
