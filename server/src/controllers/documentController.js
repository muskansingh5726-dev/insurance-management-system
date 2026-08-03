import prisma from "../config/prisma.js";

export const uploadDocument = async (req, res) => {
  try {
    const { customerId } = req.body;

    const document = await prisma.document.create({
      data: {
        fileName: req.file.filename,
        filePath: req.file.path,
        customerId: Number(customerId),
      },
    });

    res.status(201).json(document);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getDocuments = async (req, res) => {
  try {
    const documents = await prisma.document.findMany({
      include: {
        customer: true,
      },
    });

    res.json(documents);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};