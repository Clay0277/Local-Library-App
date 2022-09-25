function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) { 
  const borrowedCount = books.filter(book => book.borrows[0].returned === false).length;
   return borrowedCount; 
  }


//function getMostCommonGenres(books) {
//const bookGenre = books.map((book) => book.genre);
 //let count = {}; 
 //bookGenre.forEach(function(i) { count[i] = (count[i] || 0) + 1;
//}); 
//for (let key in count) { 
    //array.push({ name: key, count: count[key], });
  //} 
//array.sort((a, b) => (a.count < b.count ? 1 : -1));
    //return array.slice(0, 5);
  //}

  function getMostCommonGenres(books) {
    let count = 1; 
    const bookGenre = books.map((book) => book.genre);
    const countedGenres = bookGenre.reduce((allGenres, genre) => {
        const genreInfo = allGenres.find((element) => element.name === genre);
        if (genreInfo) {
          genreInfo.count+=1
        } 
        else{
          const newGenreInfo = {name: genre, count: 1};
          allGenres.push(newGenreInfo);
        }
        return allGenres;
      }, [] )
    countedGenres.sort((genreA, genreB) => genreB.count - genreA.count);
  return countedGenres.slice(0,5);
      }


function getMostPopularBooks(books) {
  let booksResult = {};
  const mostPopular = books.map((book) => {
    booksResult = {name: book.title, count: book.borrows.length}
    return booksResult;
  })
  mostPopular.sort((a, b) => b.count - a.count)
  return mostPopular.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let authorsResult = [];
  const popularAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
  popularAuthor.forEach((book) => {
    let authorName = authors.find((author) => author.id === book.authorId)
    authorsResult.push({name: `${authorName.name.first} ${authorName.name.last}`, count: book.borrows.length});
  })
  authorsResult.sort((a, b) => b.count - a.count);
  return authorsResult.slice(0,5);
  }
  



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
