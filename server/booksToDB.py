import requests
import psycopg2

# Connect to the PostgreSQL database
conn = psycopg2.connect(host='localhost', database='my_database', user='my_user', password='my_password')
cur = conn.cursor()

# Create a table to store the epubs
cur.execute("""
CREATE TABLE IF NOT EXISTS Book (
    GoogleBookId TEXT PRIMARY KEY,
    BookTitle TEXT,
    BookAuthor TEXT,
    BookPubDate DATE,
    BookGenre TEXT,
    BookDesc TEXT,
    BookAvgRating FLOAT,
);
""")

# Fetch all the epubs from the Google Books API
url = 'https://www.googleapis.com/books/v1/volumes?q=epub'
response = requests.get(url)
data = response.json()

# Iterate over all the epubs and add them to the PostgreSQL database
for item in data['items']:
    cur.execute("""
    INSERT INTO Book (
        GoogleBookId,
        BookTitle,
        BookAuthor,
        BookPubDate,
        BookGenre,
        BookDesc,
        BookAvgRating,
    ) VALUES (%s, %s, %s, %s, %s, %s, %s);
    """, (item['id'], item['volumeInfo']['title'], item['volumeInfo']['authors'][0], item['volumeInfo']['publishedDate'], item['volumeInfo']['categories'][0], item['volumeInfo']['description'], item['volumeInfo']['averageRating']))

# Commit the changes
conn.commit()

# Close the connection to the PostgreSQL database
cur.close()
conn.close()
