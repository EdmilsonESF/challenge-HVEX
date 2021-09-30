import request from "supertest";

import { mongoose } from "../../../../database";
import { app } from "../../../../shared/app";

describe("Create User Controller", () => {
  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
  });

  it("should be able to create a new user", async () => {
    const response = await request(app).post("/create").send({
      name: "super test",
      userName: "test",
      password: "123123",
    });

    expect(response.status).toBe(201);
  });
});
