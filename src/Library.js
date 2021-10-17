function createLibrary(libraryName) {
 return {
    name: libraryName,
    shelves:{
      fantasy:[],
      fiction:[],
      nonFiction:[],
    }
  };
}

function addBook(libraryName, bookTitle) {
 return libraryName.shelves[bookTitle.genre].push(bookTitle);

}
module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
