import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create User
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Jermu",
  //       email: "jermu@gmai.com",
  //     },
  //   });
  //   console.log(user);
  //   Get all users
  // const users = await prisma.user.findMany();
  // console.log(users);
  // Get all users with their articles
  //   const users = await prisma.user.findMany({
  //     include: {
  //       articles: true,
  //     },
  //   });
  //   console.log(users);
  // Create an article and associate it with user
  //   const article = await prisma.artcile.create({
  //     data: {
  //       title: "My firs tartcile",
  //       body: "this is my first artcile",
  //       author: {
  //         connect: { id: 1 },
  //       },
  //     },
  //   });
  //   console.log(article);
  //   get all articles
  //   const articles = await prisma.artcile.findMany();
  //   console.log(articles);
  // Create a user and an article and asociate them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Saara",
  //       email: "saara@gmaiil.com",
  //       articles: {
  //         create: {
  //           title: "Saara article",
  //           body: "this is saaras first artcile",
  //         },
  //       },
  //     },
  //   });
  // Create another article
  //   const article = await prisma.artcile.create({
  //     data: {
  //       title: "My second article",
  //       body: "this is my second article",
  //       author: {
  //         connect: { id: 2 },
  //       },
  //     },
  //   });
  //   console.log(article);
  // loop over saaras articles
  //   users.forEach((user) => {
  //     console.log(`User: ${user.name}, Email: ${user.email}`);
  //     console.log("Articles:");
  //     user.articles.forEach((article) => {
  //       console.log(`Title: ${article.title}, Body: ${article.body}`);
  //     });
  //     console.log("\n");
  //   });
  // update data
  //   const user = await prisma.user.update({
  //     where: { id: 1 },
  //     data: {
  //       name: "Jermu jr",
  //     },
  //   });
  // Remove data
  //   const article = await prisma.artcile.delete({
  //     where: { id: 3 },
  //   });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
