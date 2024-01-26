import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const SkillCard = () => {
  return (
    <Card className="m-4">
      <CardHeader className="flex flex-row ">
        <div>
          <CardTitle className="p-">Skills</CardTitle>
          <div className="p-2">
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">TypeScript</Badge>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default SkillCard;
