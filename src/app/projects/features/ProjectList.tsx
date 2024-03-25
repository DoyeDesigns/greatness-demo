"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import Image from "next/image";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";

type Props = {};

interface Projects {
  project: {
    img: string;
    name: string;
    description: string;
    likes: number;
    dislikes: number;
  }[];
}

function ProjectList({ project }: Projects) {
  return (
    <div className="space-y-3">
      {project.map((project, index) => (
        <Card key={index}>
          <CardContent className="flex justify-between items-center py-4 px-3">
            <div className="inline-flex space-x-6">
              <Avatar>
                <AvatarImage
                  className="rounded-full size-12"
                  src="https://github.com/shadcn.png"
                  alt="logo"
                />
                <AvatarFallback>logo</AvatarFallback>
              </Avatar>
              <p className="border rounded-md p-2">{project.name}</p>
            </div>
            <p>{project.description}</p>
            <div className="flex flex-col gap-2 items-end">
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex items-center gap-2">
                  <Button className="bg-trasparent border-none p-0 h-0">
                    <ThumbsDown
                      size={17}
                      color="black"
                      className="hover:fill-red-300"
                    />
                  </Button>
                  {project.dislikes} Dislikes
                </span>
                <span className="inline-flex gap-2 items-center">
                  <Button className="bg-trasparent border-none p-0 h-0">
                    <ThumbsUp
                      size={17}
                      color="black"
                      className="hover:fill-green-300"
                    />
                  </Button>
                  {project.likes} Likes
                </span>
              </div>
              <Button variant={"outline"}>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ProjectList;
