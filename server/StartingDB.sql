create table appUser(
UserID int identity(1,1),
UserUN nvarchar(500),
UserName nvarchar(500),
UserEmail nvarchar(500),
FavGenre nvarchar(500),
DateJoined datetime,
PhotoFileName nvarchar(500),
UserOwnedBooks nvarchar(500),
UserWishlistBooks nvarchar(500)
)

create table Book(
BookGoogleID nvarchar(500),
BookGoogleLink nvarchar(500),
BookTitle nvarchar(500),
BookAuthors nvarchar(500),
BookPubDate date,
BookGenre nvarchar(500),
BookDesc text,
BookCost float,
BookOwned bit,
BookWish bit,
BookAvgRating float,
BookRatingsList nvarchar(500)
)

create table Review(
ReviewID int identity(1,1),
ReviewUser nvarchar(500),
ReviewRating float,
ReviewTitle nvarchar(500),
ReviewText text
) 

create table OwnedBooks AS
	SELECT BookGoogleID, BookGoogleLink, BookTitle, BookAuthors, BookPubDate,
	BookGenre, BookDesc, BookAvgRating, BookRatingsList
	FROM Book
	WHERE BookOwned = 1; /* owned is true!*/

create table WishBooks AS
	SELECT BookGoogleID, BookGoogleLink, BookTitle, BookAuthors, BookPubDate,
	BookGenre, BookDesc, BookCost, BookAvgRating, BookRatingsList
	FROM Book
	WHERE BookOwned = 0 AND BookWish = 1; /* owned is false!*/

