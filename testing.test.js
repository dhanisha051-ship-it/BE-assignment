import request from "supertest";
import app from "./app.js";

describe("POST /auth/register", () => {
  it("rejects a bad email (400)", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({
        name: "dhani",
        email: "abc",
        password: "secret123",
        gender: "female",
        address: "123 Main St"
      });

    expect(res.status).toBe(400);
  });
});