import requests
import psycopg2

# Connect to the PostgreSQL database
conn = psycopg2.connect(host='localhost', database='my_database', user='my_user', password='my_password')
cur = conn.cursor()

# Create a table to store the epubs
cur.execute("""
CREATE TABLE IF NOT EXISTS book (
    id TEXT PRIMARY KEY,
    title TEXT,
    author TEXT,
    publish_date DATE,
    genre TEXT,
    description TEXT,
    average_rating FLOAT,
    epub_url TEXT
);
""")

# Fetch all the epubs from the Google Books API
url = 'https://www.googleapis.com/books/v1/volumes?q=epub'
response = requests.get(url)
data = response.json()

# Iterate over all the epubs and add them to the PostgreSQL database
for item in data['items']:
    cur.execute("""
    INSERT INTO epubs (
        id,
        title,
        author,
        publish_date,
        genre,
        description,
        average_rating,
        epub_url
    ) VALUES (%s, %s, %s, %s, %s, %s, %s);
    """, (item['id'], item['volumeInfo']['title'], item['volumeInfo']['authors'][0], item['volumeInfo']['publishedDate'], item['volumeInfo']['categories'][0], item['volumeInfo']['description'], item['volumeInfo']['averageRating'], item['accessInfo']['epub']['downloadLink']))

# Commit the changes
conn.commit()

# Close the connection to the PostgreSQL database
cur.close()
conn.close()
