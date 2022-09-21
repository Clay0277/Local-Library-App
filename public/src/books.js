function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) => author.id === id)
  return foundAuthor;
}

function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id)
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  const stillBorrowed = books.filter((book) => book.borrows[0].returned === false)
  const returned = books.filter((book) => book.borrows[0].returned !== false)
  const wholeList = [stillBorrowed, returned]
  return wholeList;
}

function getBorrowersForBook(book, accounts) { 
  let bookBorrowInfo = book.borrows.map(borrow => {
     let accountInfo = accounts.find(account => borrow.id === account.id);
      accountInfo.returned = borrow.returned
       return accountInfo }).slice(0,10)
        return bookBorrowInfo }
  //determine which accounts in the account object match the given book's ids
  //store the matching elements in an array
  //include the return status of each book 


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
