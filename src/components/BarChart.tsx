'use client'

import React from 'react'
import { Bar, BarChart as BarGrapgh, ResponsiveContainer, XAxis, YAxis, Tooltip, } from 'recharts'

type Props = {}

const data = [
    {
        name: 'gmail',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'outlook',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'brave',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'm365',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'google',
        total: Math.floor(Math.random() * 5000) + 1000,
    }
]

export default function BarChart({}: Props) {
  return (
    <ResponsiveContainer width={'100%'} height={150}>
        <BarGrapgh data={data}>
            <XAxis 
            dataKey={'name'}
            tickLine={true}
            axisLine={true}
            stroke='#888888'
            fontSize={12}
            />
            <YAxis 
            tickLine={true}
            axisLine={true}
            stroke='#888888'
            fontSize={12}
            tickFormatter={(value)=> `$${value}`}
            />
            <Tooltip />
            <Bar dataKey={'total'} radius={[4, 4, 0, 0]}/>
        </BarGrapgh>
    </ResponsiveContainer>
  )
}