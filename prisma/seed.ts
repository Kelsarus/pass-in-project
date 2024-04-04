import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "db2cab62-a204-4c49-a549-b51b109e0051",
      title: "Unite Sunmit",
      slug: "unite-sunmit",
      details: "Um evento para devs apaixonados por código.",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
