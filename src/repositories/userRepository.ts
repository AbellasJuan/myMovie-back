import { prisma } from "../database.js";

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

async function findByUserName(userName: string) {
  return prisma.user.findUnique({
    where: {
      userName,
    },
  });
};

async function findAll(){
  return prisma.user.findMany();
}

export default {
  findByEmail,
  findById,
  findByUserName,
  findAll,
};