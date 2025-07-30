import type { ReactNode } from 'react'
import './index.scss'

type CardContainerProps = {
    children: ReactNode
}

export default function CardContainer({children}: CardContainerProps) {
    return (
        <main className='cardcontainer-container'>
            {children}
        </main>
    )
}