"use client"

import SearchSection from '@/components/SearchSection'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'
import CampaignList from './features/CampaignList'
import { useCampaignStore } from '@/lib/store/campaign-store'

function Campaign() {

  const Campaigns = useCampaignStore((state) => state.campaigns);

  return (
    <main className="px-3 py-20 h-screen overflow-auto">
        <SearchSection header='Campaigns'/>
        <section>
        <div className='flex justify-end mb-10'>
          <Button><Plus /> Create New Campaign</Button>
        </div>
          <CampaignList campaign={Campaigns} />
        </section>
    </main>
  )
}

export default Campaign