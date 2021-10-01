import { AppError } from "../../../../errors/AppError";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ReadUserUseCase } from "./ReadUserUseCase";

let createUserUseCase: CreateUserUseCase;
let readUserUseCase: ReadUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    readUserUseCase = new ReadUserUseCase(userRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able to show a user", async () => {
    const userCreated = await createUserUseCase.execute({
      name: "User Test",
      userName: "User name test",
      password: "123456",
    });
    const user = await readUserUseCase.execute(userCreated.id);

    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("lastAccess");
  });

  it("should not be able to show a non-existing user", async () => {
    await expect(async () => {
      await readUserUseCase.execute("test");
    }).rejects.toBeInstanceOf(AppError);
  });
});
