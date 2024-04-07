"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
import { useProjectStore } from "@/lib/store/project-store";

type Props = {};

interface Projects {
  project: {
    id: string;
    img: string;
    name: string;
    description: string;
    likes: number;
    dislikes: number;
  }[];
}

function ProjectList({ project }: Projects) {
  const [likeState, setLikeState] = useState<{ [key: string]: boolean }>({});
  const [dislikeState, setDislikeState] = useState<{ [key: string]: boolean }>({});

   const toggleLikeDislike = useProjectStore((state) => state.toggleLikeDislike);
   const toggleLike = useProjectStore((state) => state.toggleLike);

   const handleDislike = (id: string) => {
    setDislikeState((prevState) => ({
      ...prevState,
      [id]: !dislikeState[id],
    }));
  
    if (dislikeState[id] === true && likeState[id] === false) {
      toggleLikeDislike(id, dislikeState[id]);
    } else if (dislikeState[id] === true && likeState[id] === true) {
      setLikeState((prevState) => ({
        ...prevState,
        [id]: !likeState[id],
      }));
      toggleLike(id, likeState[id]);
    } else {
      toggleLikeDislike(id, dislikeState[id]);
    }
  };

  const handleLike = (id: string) => {
    setLikeState((prevState) => ({
      ...prevState,
      [id]: !likeState[id],
    }));

    if (likeState[id] === true && dislikeState[id] === false) {
      console.log(likeState)
      console.log(dislikeState)
      toggleLike(id, likeState[id]);
    } else if (likeState[id] === true && dislikeState[id] === true) {
      setDislikeState((prevState) => ({
        ...prevState,
        [id]: !dislikeState[id],
      }));
      console.log(likeState)
      console.log(dislikeState)
      toggleLikeDislike(id, dislikeState[id]);
    } else {
      console.log(likeState)
      console.log(dislikeState)
      toggleLike(id, likeState[id]);
    }
  };


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
              <p className="border rounded-md p-2 flex items-center">{project.name}</p>
            </div>
            <p>{project.description}</p>
            <div className="flex flex-col gap-2 items-end">
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex items-center gap-2">
                  <Button className="bg-trasparent border-none p-0 h-0" onClick={() => handleDislike(project.id)}>
                    <ThumbsDown
                      size={17}
                      color="black"
                      className="hover:fill-red-300"
                    />
                  </Button>
                  {project.dislikes} Dislikes
                </span>
                <span className="inline-flex gap-2 items-center">
                  <Button className="bg-trasparent border-none p-0 h-0" onClick={() => handleLike(project.id)}>
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
