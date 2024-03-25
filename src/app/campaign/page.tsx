import SearchSection from '@/components/SearchSection'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'
import CampaignList from './features/CampaignList'

const data = [
  {
    img: 'https://github.com/shadcn.png',
    campaignId: 'dfg56-YT67',
    description: 'tctyy giyfg ygfeigf',
  },
  {
    img: 'https://github.com/shadcn.png',
    campaignId: 'dfg56-YHN8',
    description: 'tctyy giyfg',
  },
]

function Campaign() {
  return (
    <main className="px-3 py-20 h-screen overflow-auto">
        <SearchSection header='Campaigns'/>
        <section>
        <div className='flex justify-end mb-10'>
          <Button><Plus /> Create New Campaign</Button>
        </div>
          <CampaignList campaign={data} />
        </section>
    </main>
  )
}

export default Campaign