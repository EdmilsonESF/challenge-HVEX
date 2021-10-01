import { AppError } from "../../../../errors/AppError";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

let createUserUseCase: CreateUserUseCase;
let deleteUserUseCase: DeleteUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    deleteUserUseCase = new DeleteUserUseCase(userRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able to delete a user", async () => {
    const user = await createUserUseCase.execute({
      name: "User Test",
      userName: "User name test",
      password: "123456",
    });
    const promiseReturn = await deleteUserUseCase.execute(user.id);

    expect(promiseReturn).toEqual(undefined);
  });

  it("should not be able to delete a non-existing user", async () => {
    await expect(async () => {
      await createUserUseCase.execute({
        name: "User Test",
        userName: "User name test",
        password: "123456",
      });

      await deleteUserUseCase.execute("test");
    }).rejects.toBeInstanceOf(AppError);
  });
});
