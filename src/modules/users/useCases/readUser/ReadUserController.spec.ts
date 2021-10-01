import request from "supertest";

import { mongoose } from "../../../../database";
import { app } from "../../../../shared/app";

describe("Read User Controller", () => {
  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
  });

  it("should be able to show a user", async () => {
    const { body } = await request(app).post("/create").send({
      name: "super test",
      userName: "test",
      password: "123123",
    });

    const response = await request(app).get(`/read/${body.id}`);

    expect(response.status).toBe(200);
  });

  it("should not be able to show a non-existing user", async () => {
    const { body } = await request(app).post("/create").send({
      name: "super test",
      userName: "test2",
      password: "123123",
    });

    await request(app).delete(`/delete/${body.id}`);

    const response = await request(app).get(`/read/${body.id}`);

    expect(response.status).toBe(404);
  });
});
