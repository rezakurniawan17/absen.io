import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export const GET = async () => {
  try {
    // check if user is authenticated
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    // get absences
    const { user } = session;
    const absences = await db.absence.findMany({
      where: {
        teacherId: user.id,
      },
    });

    // return absences
    return new Response(JSON.stringify(absences));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
};
