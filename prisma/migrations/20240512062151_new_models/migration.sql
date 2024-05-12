/*
  Warnings:

  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Business` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_business_id_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_client_id_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_business_id_fkey";

-- DropTable
DROP TABLE "Appointment";

-- DropTable
DROP TABLE "Business";

-- DropTable
DROP TABLE "Service";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Employee" (
    "employee_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(60) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(10) NOT NULL,
    "employer_id" INTEGER NOT NULL,
    "jobsite_id" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "Employer" (
    "employer_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(60) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(10) NOT NULL,

    CONSTRAINT "Employer_pkey" PRIMARY KEY ("employer_id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "equipment_id" SERIAL NOT NULL,
    "current_jobsite" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "employer_id" INTEGER NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("equipment_id")
);

-- CreateTable
CREATE TABLE "Jobsite" (
    "jobsite_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "superintendent" VARCHAR(40) NOT NULL,
    "start_time" TIME NOT NULL,
    "contractor" VARCHAR(30) NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "employer_id" INTEGER NOT NULL,

    CONSTRAINT "Jobsite_pkey" PRIMARY KEY ("jobsite_id")
);

-- CreateTable
CREATE TABLE "Timesheet" (
    "timesheet_id" SERIAL NOT NULL,
    "employer_id" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,

    CONSTRAINT "Timesheet_pkey" PRIMARY KEY ("timesheet_id")
);

-- CreateTable
CREATE TABLE "TimesheetEntry" (
    "entry_id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "jobsite" VARCHAR(255) NOT NULL,
    "foreman" VARCHAR(50) NOT NULL,
    "start_time" TIME NOT NULL,
    "finish_time" TIME NOT NULL,
    "total_hours" VARCHAR(10) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "timesheet_id" INTEGER NOT NULL,

    CONSTRAINT "TimesheetEntry_pkey" PRIMARY KEY ("entry_id")
);

-- CreateTable
CREATE TABLE "Daily" (
    "daily_id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "date_created" VARCHAR(255) NOT NULL,
    "foreman" VARCHAR(255) NOT NULL,
    "total_hours" VARCHAR(10) NOT NULL,
    "picked_diesel" VARCHAR(20) NOT NULL,
    "picked_material" VARCHAR(20) NOT NULL,
    "exported" JSONB NOT NULL,
    "imported" JSONB NOT NULL,
    "contractor" VARCHAR(30) NOT NULL,
    "superintendent" VARCHAR(30) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "extra_description" VARCHAR(255) NOT NULL,
    "notes" VARCHAR(255) NOT NULL,
    "equipment_no" VARCHAR(3) NOT NULL,
    "employee_no" VARCHAR(3) NOT NULL,
    "rented_no" VARCHAR(3) NOT NULL,
    "employees" JSONB NOT NULL,
    "rented" JSONB NOT NULL,
    "equipment" JSONB NOT NULL,
    "employer_id" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,

    CONSTRAINT "Daily_pkey" PRIMARY KEY ("daily_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employee_id_key" ON "Employee"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_phone_key" ON "Employee"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_employer_id_key" ON "Employer"("employer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_phone_key" ON "Employer"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Equipment_equipment_id_key" ON "Equipment"("equipment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Jobsite_jobsite_id_key" ON "Jobsite"("jobsite_id");

-- CreateIndex
CREATE UNIQUE INDEX "Timesheet_timesheet_id_key" ON "Timesheet"("timesheet_id");

-- CreateIndex
CREATE UNIQUE INDEX "TimesheetEntry_entry_id_key" ON "TimesheetEntry"("entry_id");

-- CreateIndex
CREATE UNIQUE INDEX "Daily_daily_id_key" ON "Daily"("daily_id");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_employer_id_fkey" FOREIGN KEY ("employer_id") REFERENCES "Employer"("employer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_jobsite_id_fkey" FOREIGN KEY ("jobsite_id") REFERENCES "Jobsite"("jobsite_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_employer_id_fkey" FOREIGN KEY ("employer_id") REFERENCES "Employer"("employer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jobsite" ADD CONSTRAINT "Jobsite_employer_id_fkey" FOREIGN KEY ("employer_id") REFERENCES "Employer"("employer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timesheet" ADD CONSTRAINT "Timesheet_employer_id_fkey" FOREIGN KEY ("employer_id") REFERENCES "Employer"("employer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timesheet" ADD CONSTRAINT "Timesheet_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimesheetEntry" ADD CONSTRAINT "TimesheetEntry_timesheet_id_fkey" FOREIGN KEY ("timesheet_id") REFERENCES "Timesheet"("timesheet_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Daily" ADD CONSTRAINT "Daily_employer_id_fkey" FOREIGN KEY ("employer_id") REFERENCES "Employer"("employer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Daily" ADD CONSTRAINT "Daily_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
