/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('review', function (table) {
        table.string('bookGoogleID', 55).unique().notNullable()
        table.increments('id')
        table.string('reviewUser', 20).unique().notNullable()
        table.string('reviewTitle', 50).notNullable()
        table.text('reviewText').notNullable()
        table.float('reviewRating', 1,1).notNullable()
    })
    
    .createTable('ownBooks', function (table) {
        table.string('userName', 20).unique().notNullable()
        table.string('bookGoogleID', 55).unique().notNullable()
        table.string('bookGoogleLink', 255).notNullable()
        table.string('bookTitle', 255).notNullable()
        table.string('bookAuthors',255).notNullable()
        table.date('bookPubDate').notNullable()
        table.string('bookGenres', 255).notNullable()
        table.text('bookDesc').notNullable()
        table.float('bookCost', 2, 1).notNullable()
        table.float('bookAvgRating', 1,1).notNullable()
    })
    .createTableLike('wishBooks', 'ownBooks')

    .createTable('book', function (table) {
        table.string('bookGoogleID', 55).unique().notNullable()
        table.string('bookGoogleLink', 255).notNullable()
        table.string('bookTitle', 255).notNullable()
        table.string('bookAuthors', 255).notNullable()
        table.date('bookPubDate').notNullable()
        table.string('bookGenres', 255).notNullable()
        table.text('bookDesc').notNullable()
        table.float('bookCost', 2, 1).notNullable()
        table.float('bookAvgRating', 1,1).notNullable()
    })

    .createTable('friends', function (table) {
        table.string('username', 20).unique().notNullable()
        table.increments('id')
        table.string('friendUName',20)
        table.date('friendSince')
    })
    
    .createTable('users', function (table) {
        table.increments('id')
        table.string('username', 20).unique().notNullable()
        table.string('name', 255).notNullable()
        table.string('email', 255).notNullable()
        table.string('profPic', 255).notNullable()
        table.string('favGenre', 255).notNullable()
        table.string('num1Book', 255).notNullable()
        table.string('num2Book', 255).notNullable()
        table.string('num3Book', 255).notNullable()
        table.string('num4Book', 255).notNullable()
        table.string('num5Book', 255).notNullable()
        table.date('dateJoined')
      })

    

    
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema
      .dropTable('review')
      .dropTable('ownBooks')
      .dropTable('wishBooks')
      .dropTable('book')
      .dropTable('friends')
      .dropTable('users')
  };
