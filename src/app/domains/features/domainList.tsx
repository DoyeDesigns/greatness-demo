'use client'

import React from 'react'
import {
    Card,
    CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {Link as LinkIcon} from 'lucide-react'

interface DomainsProps {
    domains: {
    name: string,
    description: string,
    status: string,
    }[]
}

function DomainsList({ domains }: DomainsProps) {
  return (
    <div className='space-y-3'>
        {domains.map((domain, index) => (
                <Card key={index}>
                    <CardContent className='flex justify-between items-center py-4 px-3'>
                        <Link href={`https://${domain.name}`} className='text-blue-400 inline-flex items-center gap-1'><LinkIcon size={15}/>{domain.name}</Link>
                        <p>{domain.description}</p>
                        <div className='space-x-5'>
                            <Button variant={'outline'}>Settings</Button>
                            <Button variant={'outline'} className='hover:text-white hover:border-none hover:bg-red-500'>Delete</Button>
                        </div>
                        <span
                        className={`py-2 px-4 rounded-full text-center ${
                            domain.status === "Active"
                              ? "bg-green-500/25 text-green-700"
                              : domain.status === "InActive"
                              ? "bg-red-500/25 text-red-700"
                              : domain.status === "Paused"
                              ? "bg-orange-500/25 text-orange-700"
                              : ""
                          }`}
                        >
                            {domain.status}
                        </span>
                    </CardContent>
                </Card>
            ))}
    </div>
  )
}

export default DomainsList