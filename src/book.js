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

createTitle("Storm's Awakening");

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
