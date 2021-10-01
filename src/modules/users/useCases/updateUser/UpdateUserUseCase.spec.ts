import { AppError } from "../../../../errors/AppError";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let updateUserUseCase: UpdateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    updateUserUseCase = new UpdateUserUseCase(userRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able to show a user", async () => {
    const userCreated = await createUserUseCase.execute({
      name: "User Test",
      userName: "User name test",
      password: "123456",
    });
    const user = await updateUserUseCase.execute({
      id: userCreated.id,
      name: "User updated",
      userName: "updated",
      password: "123456",
    });

    expect(user.name).toEqual("User updated");
    expect(user.userName).toEqual("updated");
  });

  it("should not be able to show a non-existing user", async () => {
    await expect(async () => {
      await updateUserUseCase.execute({
        id: "test",
        name: "User updated",
        userName: "updated",
        password: "123456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
