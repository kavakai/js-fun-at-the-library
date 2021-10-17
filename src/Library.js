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

function checkoutBook(libraryName, bookTitle, genre) {
  for (var i = 0; i < libraryName.shelves[genre].length; i++) {
    if (bookTitle === libraryName.shelves[genre][i].title) {
      libraryName.shelves[genre].splice(i, 1)
      return `You have now checked out ${bookTitle} from the ${libraryName.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
