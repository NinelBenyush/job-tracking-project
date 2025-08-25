import sqlite3

conn = sqlite3.connect('applications.db')

cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS applications(
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        company TEXT NOT NULL,
        position TEXT NOT NULL,
        date_applied TEXT NOT NULL,
        status TEXT NOT NULL,
        FOREIGN KEY (email) REFERENCES users(email)
    )
''')

conn.commit()

conn.close()