import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

import { Absences, columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { DashboardShell } from "@/components/shell";
import { DashboardHeader } from "@/components/header";
import AbsenceCreateButton from "@/components/absence-create-button";
export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const absences: Absences[] = await db.absence.findMany({
    where: {
      teacherId: user?.id,
    },
  });

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Absence"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, deleniti."
      >
        <AbsenceCreateButton />
      </DashboardHeader>
      <DataTable columns={columns} data={absences} />
    </DashboardShell>
  );
}
