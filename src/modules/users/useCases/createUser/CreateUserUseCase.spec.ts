import { AppError } from "../../../../errors/AppError";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able to create a new user", async () => {
    const user = await createUserUseCase.execute({
      name: "User Test",
      userName: "User name test",
      password: "123456",
    });

    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("lastAccess");
  });

  it("should not be able to create a new user with user name exists", async () => {
    await expect(async () => {
      const user = {
        name: "User Test",
        userName: "User",
        password: "123456",
      };
      await createUserUseCase.execute(user);
      await createUserUseCase.execute(user);
    }).rejects.toBeInstanceOf(AppError);
  });
});
