import { create } from "zustand";
import {v4 as uuid} from 'uuid'

export type Campaign = {
    id: string
    img: string,
    campaignId: string,
    description: string,
    }
  
    export type CampaignState = {
      campaigns: Campaign[]
  }
  
  const CampaignData = [
    {
        id: uuid(),
      img: 'https://github.com/shadcn.png',
      campaignId: 'dfg56-YT67',
      description: 'tctyy giyfg ygfeigf',
    },
    {
        id: uuid(),
      img: 'https://github.com/shadcn.png',
      campaignId: 'dfg56-YHN8',
      description: 'tctyy giyfg',
    },
  ]
  
  export type CampaignActions = {
    // addDomain: (newDomain: Campaign) => void;
    deleteCampaign: (id: string) => void;
  }
  
  export const useCampaignStore = create<CampaignState & CampaignActions>()(set => ({
    campaigns: CampaignData,
    // addDomain: (newDomain: Domain) => set((state) => ({
    //   domains: [...state.domains, newDomain],
    // })), 
    deleteCampaign: (id: string) => set((state) => ({
    campaigns: state.campaigns.filter(campaign => campaign.id !== id),
    })),
  }))