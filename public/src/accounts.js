function findAccountById(accounts, id) {
  const matchingAccounts = accounts.find((account) => account.id === id)
  return matchingAccounts; 
}

function sortAccountsByLastName(accounts) {
  const sortedNames = accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1)
  return sortedNames;
}

function getTotalNumberOfBorrows(account, books) { 
  let bookResult = 0;  
  books.forEach((book) => {
    book.borrows.forEach((borrow) => { 
    if (account.id === borrow.id) { 
      bookResult += 1;
    }
     }); 
    }); 
      return bookResult;
    }


function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOut = books.filter((book) => book.borrows.find((borrow) => borrow.returned === false && borrow.id === account.id));
  booksCheckedOut.forEach((book) => (book.author = authors.find((author) => author.id === book.authorId)));
  return booksCheckedOut;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
}
