import prisma from "../src/database/database.js"


async function main() {
  await prisma.categories.createMany({
    data: [
      { name: "Literatura" },
      { name: "Literatura Infantil" },
      { name: "Literatura Infanto-Juvenil" }
    ]

  });
  await prisma.countries.create({
    data:
      { name: "Reino Unido" }
  });
  await prisma.authors.createMany({
    data: [
      { name: "Mary Shelley" },
      { name: "Jane Austen" }
    ]
  });
  await prisma.genres.createMany({
    data: [
      { name: "Drama" },
      { name: "Terror" },
      { name: "Comédia" },
      { name: "Romance" }
    ]
  });
  await prisma.years.create({
    data: { number: "1818" }
  });
  await prisma.books.createMany({
    data: [
      {
        title: "Frankenstein",
        isbn: "5491254983611",
        categoryId: 1,
        countryId: 1,
        yearId: 1
      },
      {
        title: "Persuasão",
        isbn: "9788544001868",
        categoryId: 1,
        countryId: 1,
        yearId: 1
      }
    ]
  });
  await prisma.authorsbooks.createMany({
    data: [
      {
        authorId: 1,
        bookId: 1
      },
      {
        authorId: 2,
        bookId: 2
      }
    ]
  });
  await prisma.genresbooks.createMany({
    data: [
      {
        genreId: 2,
        bookId: 1
      },
      {
        genreId: 4,
        bookId: 2
      },
      {
        genreId: 1,
        bookId: 2
      }
    ]
  });



};


main()
  .then(() => {
    console.log("Registro feito com sucesso");
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })