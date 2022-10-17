/*
  Warnings:

  - You are about to drop the column `fileName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fileSize` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fileType` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `fileName`,
    DROP COLUMN `fileSize`,
    DROP COLUMN `fileType`;
