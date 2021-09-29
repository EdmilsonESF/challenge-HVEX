import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const createUserUseCase = container.resolve(DeleteUserUseCase);

    await createUserUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DeleteUserController };
