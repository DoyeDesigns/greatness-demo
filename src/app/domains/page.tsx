import SearchSection from '@/components/SearchSection'
import { Button } from '@/components/ui/button'
import React from 'react'
import {Plus} from 'lucide-react'
import DomainsList from './features/domainList'

const data = [
  {
    name: 'm365.com',
    description: 'lorem ipsum hwuygfey wyfuy gyugf',
    status: 'Active',
  },
  {
    name: 'okta.com',
    description: 'lorem ipsum hwuygfey wyfuy gyugf',
    status: 'Active',
  }
]

function Domains() {
  return (
    <main className="px-3 py-20 h-screen overflow-auto">
        <SearchSection header='Domains'/>
        <section>
        <div className='flex justify-end mb-10'>
          <Button><Plus /> Add Domain</Button>
        </div>
          <DomainsList domains={data} />
        </section>
    </main>
  )
}

export default Domains