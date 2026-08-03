import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";

export const getCustomers = async (req, res) => {
  try {
    const customers = await prisma.customer.findMany({
      include: {
        user: true,
      },
    });

    res.json(customers);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        user: true,
      },
    });

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    res.json(customer);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      address,
      dob,
    } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "CUSTOMER",
      },
    });

    const customer = await prisma.customer.create({
      data: {
        phone,
        address,
        dob: new Date(dob),
        userId: user.id,
      },
      include: {
        user: true,
      },
    });

    res.status(201).json(customer);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};