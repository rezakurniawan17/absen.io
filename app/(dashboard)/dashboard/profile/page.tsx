import { getCurrentUser } from "@/lib/session";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
export default async function Profile() {
  const user = await getCurrentUser();
  return (
    <Card className="max-w-[300px]">
      <CardHeader className="font-bold">Profile</CardHeader>
      <CardContent className="flex flex-col gap-1">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <span className="text-xl font-bold">{user?.name}</span>
        <span>{user?.email}</span>
      </CardContent>
    </Card>
  );
}
