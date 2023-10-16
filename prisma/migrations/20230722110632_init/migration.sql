/*
  Warnings:

  - You are about to drop the column `product_name` on the `inventory_table` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_image_table" (
    "imageid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    CONSTRAINT "image_table_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product_table" ("product_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_image_table" ("image_url", "imageid", "product_id") SELECT "image_url", "imageid", "product_id" FROM "image_table";
DROP TABLE "image_table";
ALTER TABLE "new_image_table" RENAME TO "image_table";
CREATE UNIQUE INDEX "image_table_imageid_key" ON "image_table"("imageid");
CREATE UNIQUE INDEX "image_table_product_id_key" ON "image_table"("product_id");
CREATE TABLE "new_product_table" (
    "product_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL,
    "user_id" INTEGER,
    CONSTRAINT "product_table_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users_table" ("userid") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_product_table" ("description", "price", "product_id", "product_name") SELECT "description", "price", "product_id", "product_name" FROM "product_table";
DROP TABLE "product_table";
ALTER TABLE "new_product_table" RENAME TO "product_table";
CREATE UNIQUE INDEX "product_table_product_id_key" ON "product_table"("product_id");
CREATE UNIQUE INDEX "product_table_product_name_key" ON "product_table"("product_name");
CREATE TABLE "new_inventory_table" (
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "inventory_table_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product_table" ("product_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_inventory_table" ("product_id", "quantity") SELECT "product_id", "quantity" FROM "inventory_table";
DROP TABLE "inventory_table";
ALTER TABLE "new_inventory_table" RENAME TO "inventory_table";
CREATE UNIQUE INDEX "inventory_table_product_id_key" ON "inventory_table"("product_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
