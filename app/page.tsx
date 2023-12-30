import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-screen min-h-screen container mx-auto pt-32">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Welcome to Absen.io</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
            delectus!
          </p>
        </div>
        <div>
          <Button variant={"default"}>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
