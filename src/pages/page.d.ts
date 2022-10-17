import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export interface Card {
    name: string
    species: string
    status: string
    location: {
        name: string
        url: string
    }
    gender: string
    origin: {
        name: string
        url: string
    }
    image: string
}