"use server";

import { db } from "@/lib/db";
import { Absence } from "@prisma/client";
export const addAbsence = async (data: Absence) => {
  const addAbsenceResult = await db.absence.create({
    data: data,
  });

  return addAbsenceResult;
};
