import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TotalTraffic() {
  return (
    <div>
      <Card className="inline-block">
        <CardHeader>
          <CardTitle className="text-center">Total Traffic</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-3">
                <span>
                    123
                </span>
                <p>Total Traffic</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <span>
                    56
                </span>
                <p>Total bots</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TotalTraffic;
