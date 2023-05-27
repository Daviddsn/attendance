/*
  Warnings:

  - You are about to drop the `eventclass` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "eventclass" DROP CONSTRAINT "eventclass_classId_fkey";

-- DropForeignKey
ALTER TABLE "eventclass" DROP CONSTRAINT "eventclass_eventId_fkey";

-- AlterTable
ALTER TABLE "students" ALTER COLUMN "dateOfBirth" SET DATA TYPE DATE;

-- DropTable
DROP TABLE "eventclass";
