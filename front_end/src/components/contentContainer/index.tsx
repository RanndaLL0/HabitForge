import './index.scss'

import type { ReactNode } from "react"

type ContentContainerProps = {
    children: ReactNode
}

export default function ContentContainer({children}: ContentContainerProps) {
    return (
        <section className="content-container">
            {children}
        </section>
    )
}