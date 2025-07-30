import type { ReactNode } from 'react';
import './index.scss';

type AppContainerProps = {
    children: ReactNode
}

export default function AppContainer({children}: AppContainerProps) {
    return (
        <main className='main-container'>
            {children}
        </main>
    )
}