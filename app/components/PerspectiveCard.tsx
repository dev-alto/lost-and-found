'use client'

import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'

interface PerspectiveCardProps {
    children: ReactNode
    maxAngleX?: number
    maxAngleY?: number
    invertX?: boolean
    invertY?: boolean
    perspective?: number
}

export function PerspectiveCard({ children, maxAngleX = 0, maxAngleY = 0, invertX = false, invertY = false, perspective = 1200 }: PerspectiveCardProps) {

    const [rotation, setRotation] = useState('')
    const [hovering, setHovering] = useState(false)

    const cardRef = useRef<HTMLDivElement>(null)
    const cardBoundsRef = useRef<DOMRect>(null)

    function updatePerspective(event: MouseEvent) {
        if (!cardBoundsRef.current) return

        const cardBounds = cardBoundsRef.current

        const mouseX = (event.clientX + window.scrollX) - (cardBounds.x + cardBounds.width / 2)
        const mouseY = (event.clientY + window.scrollY) - (cardBounds.y + cardBounds.height / 2)

        const mousePX = mouseX / cardBounds.width
        const mousePY = mouseY / cardBounds.height

        let rX = mousePX * maxAngleX
        if (invertX)
            rX *= -1

        let rY = mousePY * maxAngleY
        if (invertY)
            rY *= -1

        const rotation = `rotateY(${rX}deg) rotateX(${-rY}deg`

        setHovering(true)
        setRotation(rotation)
        // console.log(rotation)
    }

    function updateCardBounds() {
        cardBoundsRef.current = cardRef.current!.getBoundingClientRect()
    }

    useEffect(() => {
        if (!cardRef.current) return

        updateCardBounds()
        window.addEventListener('resize', updateCardBounds)

        return () => {
            window.removeEventListener('resize', updateCardBounds)
        }
    }, [cardRef])
    
    return <section style={{ perspective: perspective }}>
        <div
            className="transition-all hover:ease-out ease-linear duration-700"
            style={{ transform: hovering ? rotation : '' }}
            onMouseEnter={updateCardBounds}
            onMouseMove={updatePerspective}
            onMouseLeave={() => { setHovering(false) }}
            ref={cardRef}
        >
            {children}
        </div>
    </section>
}