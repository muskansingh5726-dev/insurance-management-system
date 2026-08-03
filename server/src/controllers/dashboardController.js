import prisma from "../config/prisma.js";

export const getDashboardStats = async (req, res) => {
  try {

    const totalCustomers = await prisma.customer.count();

    const totalPolicies = await prisma.policy.count();

    const totalClaims = await prisma.claim.count();

    const revenue = await prisma.premiumPayment.aggregate({
      _sum: {
        amount: true,
      },
    });

    res.json({
      customers: totalCustomers,
      policies: totalPolicies,
      claims: totalClaims,
      revenue: revenue._sum.amount || 0,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};