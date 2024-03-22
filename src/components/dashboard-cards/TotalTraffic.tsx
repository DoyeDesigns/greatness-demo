import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TotalTraffic() {
  return (
      <Card className="inline-block">
        <CardHeader>
          <CardTitle>Total Traffic</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center gap-10">
            <div className="flex flex-col items-center gap-3">
                <span className="font-bold text-3xl">
                    123
                </span>
                <p>Total Traffic</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <span className="font-bold text-3xl">
                    56
                </span>
                <p>Total bots</p>
            </div>
          </div>
        </CardContent>
      </Card>
  );
}

export default TotalTraffic;
