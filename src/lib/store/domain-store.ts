import { create } from "zustand";
import {v4 as uuid} from 'uuid'

export type Domain = {
    id: string
    name: string,
    description: string,
    status: string,
    }
  
    export type DomainState = {
      domains: Domain[]
  }
  
  const DomainData = [
    {
      id: uuid(),
      name: 'm365.com',
      description: 'lorem ipsum hwuygfey wyfuy gyugf',
      status: 'Active',
    },
    {
      id: uuid(),
      name: 'okta.com',
      description: 'lorem ipsum hwuygfey wyfuy gyugf',
      status: 'Active',
    }
  ]
  
  export type DomainActions = {
    addDomain: (newDomain: Domain) => void;
    deleteDomain: (id: string) => void;
  }
  
  export const useDomainStore = create<DomainState & DomainActions>()(set => ({
    domains: DomainData,
    addDomain: (newDomain: Domain) => set((state) => ({
      domains: [...state.domains, newDomain],
    })), 
    deleteDomain: (id: string) => set((state) => ({
    domains: state.domains.filter(domain => domain.id !== id),
    })),
  }))