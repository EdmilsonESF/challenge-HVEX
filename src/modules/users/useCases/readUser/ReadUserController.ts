import { Request, Response } from "express";
import { container } from "tsyringe";

import { ReadUserUseCase } from "./ReadUserUseCase";

class ReadUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const readUserUseCase = container.resolve(ReadUserUseCase);

    const user = await readUserUseCase.execute(id);

    return response.status(200).json(user);
  }
}

export { ReadUserController };
