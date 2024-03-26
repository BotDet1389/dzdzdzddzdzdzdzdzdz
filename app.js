var books = [
    { title: "Война и Мир", year: 1869 },
    { title: "1984", year: 1949 },
    { title: "Унесенные ветром", year: 1936 },
    { title: "Преступление и наказание", year: 1866 }
];
books.sort((book1, book2) => book1.year - book2.year);
console.log(books);