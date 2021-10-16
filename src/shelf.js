function shelfBook(titles, shelf) {
  if (shelf.length < 3) {
  shelf.unshift(titles);
return shelf
}
}

function unshelfBook() {
  
}


module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
