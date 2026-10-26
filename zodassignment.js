const { z } = require("zod");
const mongoose = require("mongoose");

const signupSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters"),
    email: z.string().trim().toLowerCase().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    address: z.string().optional(),
    gender:z.string().optional(),
});

const name = prompt("Enter your name:");
const email = prompt("Enter your email:");
const password = prompt("Enter your password:");
const address = prompt("Enter your address:");
const gender = prompt("Enter your gender:");
const result = signupSchema.safeParse({
    name: name,
    email: email,
    password: password,
    address: address,
    gender: gender
});
