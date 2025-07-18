'''

import psycopg2


conn = psycopg2.connect(host="localhost", dbname="postgres", user="dipeshbarakoti",
                         password="Macdipesh1&&", port=5432)


cur = conn.cursor()


cur.execute("""DROP TABLE IF EXISTS inventory
""")


conn.commit()


cur.close()
conn.close()

'''







