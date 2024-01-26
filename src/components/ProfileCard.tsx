import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileCard = () => {
  return (
    <Card className="m-4">
      <CardHeader className="flex flex-row ">
        <img className="w-[100px] mx-3" src="https://github.com/shadcn.png" />
        <div>
          <CardTitle>Pratham Dupare</CardTitle>
          <CardDescription>Web Developer</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProfileCard;
