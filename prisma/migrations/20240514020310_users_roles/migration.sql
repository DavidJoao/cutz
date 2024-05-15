/*
  Warnings:

  - Added the required column `role` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Employer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "role" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Employer" ADD COLUMN     "role" VARCHAR(255) NOT NULL;
