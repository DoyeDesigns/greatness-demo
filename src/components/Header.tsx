'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Header() {
  return (
    <header className='flex justify-end absolute w-full pt-7 px-3'>
        <span className='flex items-center gap-2'>
            Username
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt='Profile-pic'/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </span>
    </header>
  )
}

export default Header