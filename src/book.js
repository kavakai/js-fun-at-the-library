function createTitle(title) {
  return (`The ${title}`);
}
createTitle("Storm's Awakening");

function buildMainCharacter(name, age, pronouns) {
  ghoulCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return ghoulCharacter
}

function saveReview(review, reviews) {
  reviews.push(review)
  return reviews
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
