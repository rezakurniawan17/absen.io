import Link from "next/link";
import { Tent } from "lucide-react";

export default function MainNav() {
  return (
    <Link href="/dashboard">
      <span className="inline-flex items-center font-bold gap-2 text-xl">
        <Tent />
        Absen.io
      </span>
    </Link>
  );
}
