"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, X, Bot, Copy } from "lucide-react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar } from "@radix-ui/react-avatar";
import { useCampaignStore } from "@/lib/store/campaign-store";

type Props = {};

interface Campaigns {
  campaign: {
    id: string;
    img: string;
    campaignId: string;
    description: string;
  }[];
}

const campaignIcons = [
  {
    name: "Bot Settings",
    icon: Bot,
  },
  {
    name: "Settings",
    icon: Settings,
  },
  {
    name: "Delete",
    icon: X,
  },
];

function CampaignList({ campaign }: Campaigns) {
  const deleteCampaign = useCampaignStore((state) => state.deleteCampaign);

  return (
    <TooltipProvider>
      <div className="space-y-3">
        {campaign.map((campaign, index) => (
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
                <p className="border rounded-md p-2 flex items-center">
                  {campaign.campaignId}
                </p>
              </div>
              <p>{campaign.description}</p>

              <div className="flex flex-col gap-5 items-end">
                <div className="inline-flex items-center gap-3 justify-end">
                  {campaignIcons.map((icon, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <span className="inline-flex gap-2 items-center">
                          {icon.icon === X ? (
                            <Button
                              onClick={() => deleteCampaign(campaign.id)}
                              className="bg-trasparent border-none p-0 h-0"
                            >
                              <icon.icon
                                color={'red'}
                                size={17}
                              />
                            </Button>
                          ) : (
                            <Button className="bg-trasparent border-none p-0 h-0">
                              <icon.icon
                                color={'black'}
                                size={17}
                              />
                            </Button>
                          )}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>{icon.name}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant={"outline"}>
                    <Copy size={15} color="black" className="mr-2" /> Copy link
                  </Button>
                  <Button variant={"outline"}>View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default CampaignList;
