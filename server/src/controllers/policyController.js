import prisma from "../config/prisma.js";

export const getPolicies = async (req, res) => {
  try {
    const policies = await prisma.policy.findMany({
      include: {
        customer: {
          include: {
            user: true,
          },
        },
      },
    });

    res.json(policies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPolicyById = async (req, res) => {
  try {
    const policy = await prisma.policy.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!policy) {
      return res.status(404).json({
        message: "Policy not found",
      });
    }

    res.json(policy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createPolicy = async (req, res) => {
  try {
    const {
      policyNumber,
      policyType,
      premium,
      startDate,
      endDate,
      status,
      customerId,
    } = req.body;

    const policy = await prisma.policy.create({
      data: {
        policyNumber,
        policyType,
        premium: Number(premium),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status,
        customerId,
      },
    });

    res.status(201).json(policy);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const deletePolicy = async (req, res) => {
  try {
    await prisma.policy.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Policy Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};