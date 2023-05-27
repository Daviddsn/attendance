/*
  Warnings:

  - You are about to drop the `_meeting_teams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_meeting_teams" DROP CONSTRAINT "_meeting_teams_A_fkey";

-- DropForeignKey
ALTER TABLE "_meeting_teams" DROP CONSTRAINT "_meeting_teams_B_fkey";

-- AlterTable
ALTER TABLE "attendaces" ALTER COLUMN "date" SET DATA TYPE DATE;

-- DropTable
DROP TABLE "_meeting_teams";
