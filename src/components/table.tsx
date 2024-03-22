import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableProps {
  data: {
    name: string;
    start: Date;
    end: Date;
    status: string;
    log: number;
    visits: number;
  }[];
}

const tableHead = [
  "Project Name",
  "Start Subscription",
  "Due Date",
  "Status",
  "Logs",
  "Visits",
];

function DataTable({ data }: TableProps) {
  return (
    <Table>
      <TableCaption>A list of your products.</TableCaption>
      <TableHeader>
        <TableRow>
          {tableHead.map((heads, index) => (
            <TableHead className="font-bold" key={index}>{heads}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{data.name}</TableCell>
            <TableCell className="font-medium">
              {data.start.toDateString()}
            </TableCell>
            <TableCell>{data.end.toDateString()}</TableCell>
            <TableCell>
              <div
                className={`p-2 rounded-full text-center ${
                  data.status === "Active"
                    ? "bg-green-500/25 text-green-700"
                    : data.status === "InActive"
                    ? "bg-red-500/25 text-red-700"
                    : data.status === "Paused"
                    ? "bg-orange-500/25 text-orange-700"
                    : ""
                }`}
              >
                {data.status}
              </div>
            </TableCell>
            <TableCell className="text-right">{data.log}</TableCell>
            <TableCell className="text-right">{data.visits}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;
