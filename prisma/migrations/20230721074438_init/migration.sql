/*
  Warnings:

  - Added the required column `name` to the `users_table` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users_table" (
    "userid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_users_table" ("email", "password", "userid", "username") SELECT "email", "password", "userid", "username" FROM "users_table";
DROP TABLE "users_table";
ALTER TABLE "new_users_table" RENAME TO "users_table";
CREATE UNIQUE INDEX "users_table_userid_key" ON "users_table"("userid");
CREATE UNIQUE INDEX "users_table_username_key" ON "users_table"("username");
CREATE UNIQUE INDEX "users_table_email_key" ON "users_table"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
