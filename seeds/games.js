exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("games")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("games").insert([
        { title: "Baseball", genre: "Reason for Living", releaseYear: "1869" },
        {
          title: "Dungeons and Dragons",
          genre: "Pastime for people with no life"
        }, //releaseYear is not required. Left out so I can test it
        { title: "Galaga", genre: "Arcade Game", releaseYear: "1982" }
      ]);
    });
};
