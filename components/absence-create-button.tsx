"use client";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Link from "next/link";

export default function AbsenceCreateButton() {
  return (
    <Link href="/dashboard/add">
      <Button variant={"default"} size={"sm"}>
        <Icons.add className="mr-2" />
        Add Abscence
      </Button>
    </Link>
  );
}
