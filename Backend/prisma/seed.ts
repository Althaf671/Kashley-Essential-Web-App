import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");


  // Seed Categories
  const categories = [
    { name: "Men" },
    { name: "Women" },
    { name: "Kids" },
    { name: "Accessories" },
  ];

  await prisma.category.createMany({ data: categories });

  const categoryData = await prisma.category.findMany();

  // Seed Subcategories
  const subcategories = [
    { name: "menShirt", categoryId: categoryData[0].id },
    { name: "menPants", categoryId: categoryData[0].id },
    { name: "menBag", categoryId: categoryData[0].id },
    { name: "menShoes", categoryId: categoryData[0].id },
    { name: "menBoots", categoryId: categoryData[0].id },
    { name: "womenShirt", categoryId: categoryData[1].id },
    { name: "womenPants", categoryId: categoryData[1].id },
    { name: "womenBag", categoryId: categoryData[1].id },
    { name: "womenShoes", categoryId: categoryData[1].id },
    { name: "womenBoots", categoryId: categoryData[1].id },
    { name: "kidsShirt", categoryId: categoryData[2].id },
    { name: "kidsPants", categoryId: categoryData[2].id },
    { name: "kidsBag", categoryId: categoryData[2].id },
    { name: "kidsShoes", categoryId: categoryData[2].id },
    { name: "ring", categoryId: categoryData[3].id },
    { name: "bracelet", categoryId: categoryData[3].id },
    { name: "necklace", categoryId: categoryData[3].id },
    { name: "belt", categoryId: categoryData[3].id },
  ];

  await prisma.subcategory.createMany({ data: subcategories });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });