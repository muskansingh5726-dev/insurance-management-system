import prisma from "../config/prisma.js";

export const getPayments = async (req, res) => {
  try {
    const payments = await prisma.premiumPayment.findMany({
      include: {
        policy: true,
      },
    });

    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createPayment = async (req, res) => {
  try {
    const { amount, paymentDate, status, policyId } = req.body;

    const payment = await prisma.premiumPayment.create({
      data: {
        amount: Number(amount),
        paymentDate: new Date(paymentDate),
        status,
        policyId,
      },
    });

    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deletePayment = async (req, res) => {
  try {
    await prisma.premiumPayment.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Payment Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};