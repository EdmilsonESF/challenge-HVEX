import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUser } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ReadUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<IUser> {
    const userAlreadyExists = await this.usersRepository.findById(id);

    if (!userAlreadyExists) {
      throw new AppError("User not found", 404);
    }

    const user = userAlreadyExists;

    return user;
  }
}

export { ReadUserUseCase };
