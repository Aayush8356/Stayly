import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sidebar } from "../Sidebar";

export const Dashboard = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader className="">Dashboard</CardHeader>
      <CardContent className="flex gap-6 p-4">
        <Sidebar />
        <div className="w-full bg-slate-200"></div>
      </CardContent>
    </Card>
  );
};
