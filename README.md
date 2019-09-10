## Getting Started

1. Install Docker.
2. In `docker`, run `npm start` to start Postgres.
3. In `data-service-final`, run `npm run start:dev` to start Nest server.
4. Browse to `localhost:3000/api` to view Swagger.

### Directly Query Postgres

1. Run `npm run shell:postgres` to shell into Postgres container.
2. Run `su - postgres` to switch to user `postgres`.
3. Run `psql` to open Postgres shell.
4. Run `\c demo` to connect to `demo` database.
5. Run `\dt` to list tables.
6. Run `d+ user` to show `user` table description.
7. Run `select * from public.user;` to get records in `user` table.
