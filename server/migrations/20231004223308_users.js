/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    
    .createTable('Book', function (table) {
        table.text('GoogleBookId').unique().notNullable()
        table.text('BookCoverLink')
        table.text('BookTitle').notNullable()
        table.text('BookAuthor')
        table.string('BookPubDate')
        table.text('BookGenre')
        table.text('BookDesc')
        table.float('BookAvgRating', 1,1)
    })

    .createTable('appUser', function (table) {
        table.increments('userId')
        table.string('userUN').unique()
        table.string('userName').notNullable()
        table.string('userEmail').notNullable()
        table.text('userPicLink')
        table.string('userFavGenre')
        table.date('userJoinedAt').notNullable()
        table.boolean('userLoggedIn')
        table.string('userCurrRead').references("GoogleBookId").inTable("Book")

    })

    .createTable('OwnedBooks', function (table) {
        table.increments('OwnedId')
        table.integer('userId').notNullable().references("userId").inTable("appUser")
        table.string('GoogleBookId').notNullable().references("GoogleBookId").inTable("Book")
    })

    .createTable('WishedBooks', function (table) {
        table.increments('WishId')
        table.integer('userId').notNullable().references("userId").inTable("appUser")
        table.string('GoogleBookId').notNullable().references("GoogleBookId").inTable("Book")
    })

    .createTable('UserFriends', function (table) {
        table.increments('userFriendsId')
        table.integer('userId').notNullable().references("userId").inTable("appUser")
        table.integer('friendId').notNullable().references("userId").inTable("appUser")
    })
    
    .createTable('Top5Books', function (table) {
        table.increments('topBookId')
        table.integer('userId').unique().notNullable().references("userId").inTable("appUser")
        table.string('BookId').notNullable().references("GoogleBookId").inTable("Book")
        table.integer('BookRank').notNullable()
    })
    
    .createTable('Reviews', function (table) {
        table.increments('ReviewId')
        table.string('GoogleBookId').notNullable().references("GoogleBookId").inTable("Book")
        table.integer('ReviewUserId').notNullable().references("userId").inTable("appUser")
        table.string('ReviewTitle').notNullable()
        table.string('ReviewText').notNullable()
        table.float('ReviewRating', 1,1).notNullable()
    })
    
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema
      .dropTable('Reviews')
      .dropTable('Top5Books')
      .dropTable('UserFriends')
      .dropTable('WishedBooks')
      .dropTable('OwnedBooks')
      .dropTable('appUser')
      .dropTable('Book')
  };