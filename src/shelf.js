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
 }
 // }  console.log(shelf)
 return shelf
}

function listTitles(shelf, title) {
var titleList = [];
  for (var i = 0; i < shelf.length; i++) {
    titleList.push(shelf[i].title)
  }
// console.log(titleList)
  return titleList.join(", ")
}

function searchShelf(shelf, titles) {
// var searchBooks = listTitles(shelf, title)
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title == titles) {
      // console.log(searchBooks)
      return true
    // } else {
      // return false
    }
  } return false
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
