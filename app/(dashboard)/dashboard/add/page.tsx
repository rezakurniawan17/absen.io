import AbsenceAddForm from "@/components/absence-add-form";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
export default async function AddAbsence() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  const userId = session.user.id;
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Add Absence"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, deleniti."
      />
      <AbsenceAddForm userId={userId} />
    </DashboardShell>
  );
}
