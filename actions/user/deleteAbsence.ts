"use server";
import { db } from "@/lib/db";
export const deleteAbsence = async (absenceId: string) => {
  return await db.absence.delete({
    where: {
      id: absenceId,
    },
  });
};
