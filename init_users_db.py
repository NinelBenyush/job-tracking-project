import sqlite3

conn = sqlite3.connect('users.db')

cursor = conn.cursor()

# email password username name
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users(
        email TEXT NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    )
''')

conn.commit()

conn.close()