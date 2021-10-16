function createTitle(title) {
  return (`The ${title}`);
}

function buildMainCharacter(name, age, pronouns) {
  ghoulCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return ghoulCharacter
}

function saveReview(review, reviews) {
  for(var i=0; i<reviews.length; i++)
  if (review === reviews[i]) {
    return reviews
}
  reviews.push(review)
  return reviews
}

function calculatePageCount(bookTitle, bookPageCount) {
  return (bookTitle.length*20)
}

function writeBook(bookTitle, bookCharacter, genre,) {
  newBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: genre,
    pageCount: bookTitle.length*20,
  }
  // console.log(newBook);
  return newBook
}

function editBook() {

}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
