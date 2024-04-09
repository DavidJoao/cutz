-- CreateTable
CREATE TABLE "User" (
    "client_id" SERIAL NOT NULL,
    "first_name" VARCHAR(20) NOT NULL,
    "second_name" VARCHAR(20) NOT NULL,
    "dob" DATE NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(10) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("client_id")
);

-- CreateTable
CREATE TABLE "Business" (
    "business_id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "second_name" VARCHAR(255) NOT NULL,
    "dob" DATE NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(10) NOT NULL,
    "location" VARCHAR(255) NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("business_id")
);

-- CreateTable
CREATE TABLE "Service" (
    "service_id" SERIAL NOT NULL,
    "service_name" VARCHAR(255) NOT NULL,
    "service_price" DECIMAL NOT NULL,
    "business_id" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "appointment_id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "price" DECIMAL NOT NULL,
    "service" VARCHAR(255) NOT NULL,
    "client_name" VARCHAR(255) NOT NULL,
    "client_id" INTEGER NOT NULL,
    "business_name" VARCHAR(255) NOT NULL,
    "business_id" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("appointment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_client_id_key" ON "User"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Business_business_id_key" ON "Business"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "Business_email_key" ON "Business"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Business_phone_key" ON "Business"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Service_service_id_key" ON "Service"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_appointment_id_key" ON "Appointment"("appointment_id");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "Business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "User"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "Business"("business_id") ON DELETE RESTRICT ON UPDATE CASCADE;
