-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_jobsite_id_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "jobsite_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_jobsite_id_fkey" FOREIGN KEY ("jobsite_id") REFERENCES "Jobsite"("jobsite_id") ON DELETE SET NULL ON UPDATE CASCADE;
