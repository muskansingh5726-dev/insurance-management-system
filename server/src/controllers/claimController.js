import prisma from "../config/prisma.js";

export const getClaims = async (req, res) => {
  try {
    const claims = await prisma.claim.findMany({
      include: {
        policy: true,
      },
    });

    res.json(claims);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createClaim = async (req, res) => {
  try {
    const { claimAmount, reason, status, policyId } = req.body;

    const claim = await prisma.claim.create({
      data: {
        claimAmount: Number(claimAmount),
        reason,
        status,
        policyId,
      },
    });

    res.status(201).json(claim);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteClaim = async (req, res) => {
  try {
    await prisma.claim.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Claim Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};