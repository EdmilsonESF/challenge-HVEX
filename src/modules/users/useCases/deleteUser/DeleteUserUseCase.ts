import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findById(id);

    if (!userAlreadyExists) {
      throw new AppError("User not found", 404);
    }

    await this.usersRepository.delete(id);
  }
}

export { DeleteUserUseCase };
