import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DataTable from "../table";

const data = [
  {
    name: "Google",
    start: new Date(20240211),
    end: new Date(20240311),
    status: "Active",
    log: 24,
    visits: 59,
  },
  {
    name: "Microsoft",
    start: new Date("2024-03-16"),
    end: new Date("2024-03-21"),
    status: "InActive",
    log: 15,
    visits: 25,
  },
  {
    name: "m365",
    start: new Date("2024-03-17"),
    end: new Date("2024-03-22"),
    status: "Paused",
    log: 20,
    visits: 30,
  },
];

function DashboardTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable data={data} />
      </CardContent>
    </Card>
  );
}

export default DashboardTable;
