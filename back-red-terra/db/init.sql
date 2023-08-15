SELECT  'CREATE DATABASE red_terra'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'red_terra')\gexec
