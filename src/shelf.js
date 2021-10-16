function shelfBook(titles, shelf) {
  if (shelf.length < 3) {
  shelf.unshift(titles);
return shelf
}
}

function unshelfBook(title, shelf) {
   for (var i = 0; i < shelf.length; i++)
  if (title === shelf[i].title) {
   shelf.splice(i, 1)
 }  console.log(shelf)
 return shelf
}


module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
