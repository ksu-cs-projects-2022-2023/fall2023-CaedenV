/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('Reviews', function (table) {
        table.increments('ReviewId')
        table.string('GoogleBookId').unique().notNullable().references("GoogleBookId").inTable("Book")
        table.integer('ReviewUserId').unique().notNullable().references("userId").inTable("appUser")
        table.string('ReviewTitle').notNullable()
        table.string('ReviewText').notNullable()
        table.float('ReviewRating', 1,1).notNullable()
    })
    
    .createTable('OwnedBooks', function (table) {
        table.increments('OwnedId')
        table.integer('userId').unique().notNullable().references("userId").inTable("appUser")
        table.string('bookGoogleID').unique().notNullable().references("GoogleBookId").inTable("Book")
    })

    .createTable('WishedBooks', function (table) {
        table.increments('WishId')
        table.integer('userId').unique().notNullable().references("userId").inTable("appUser")
        table.string('GoogleBookId').unique().notNullable().references("GoogleBookId").inTable("Book")
    })
    .createTable('Book', function (table) {
        table.string('GoogleBookId').unique().notNullable()
        table.string('BookCoverLink')
        table.string('BookTitle').notNullable()
        table.string('BookAuthor')
        table.date('BookPubDate')
        table.string('BookGenre')
        table.string('BookDesc')
        table.float('BookAvgRating', 1,1)
    })

    .createTable('UserFriends', function (table) {
        table.increments('userFriendsId')
        table.integer('userId').unique().notNullable().references("userId").inTable("appUser")
        table.integer('friendId').unique().notNullable().references("userId").inTable("appUser")
    })
    
    .createTable('appUser', function (table) {
        table.increments('userId')
        table.string('userUN').unique()
        table.string('userName').notNullable()
        table.string('userEmail').notNullable()
        table.string('userPicLink')
        table.string('userFavGenre')
        table.date('userJoinedAt')
        table.boolean('userLoggedIn')

    })

    .createTable('Top5Books', function (table) {
        table.increments('topBookId')
        table.integer('userId').notNullable().references("userId").inTable("appUser")
        table.string('GoogleBookId').notNullable().references("GoogleBookId").inTable("Book")
        table.integer('Priority').notNullable()
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
