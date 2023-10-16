-- CreateTable
CREATE TABLE "product_table" (
    "product_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "image_table" (
    "imageid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "inventory_table" (
    "product_name" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "users_table" (
    "userid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "product_table_product_id_key" ON "product_table"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "product_table_product_name_key" ON "product_table"("product_name");

-- CreateIndex
CREATE UNIQUE INDEX "image_table_imageid_key" ON "image_table"("imageid");

-- CreateIndex
CREATE UNIQUE INDEX "image_table_product_id_key" ON "image_table"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_table_product_name_key" ON "inventory_table"("product_name");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_table_product_id_key" ON "inventory_table"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_table_userid_key" ON "users_table"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "users_table_username_key" ON "users_table"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_table_email_key" ON "users_table"("email");
