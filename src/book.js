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
  for(var i=0; i<reviews.length; i++)
  if (review === reviews[i]) {
    return reviews
}
  reviews.push(review)
  return reviews
}

function calculatePageCount() {
  
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
