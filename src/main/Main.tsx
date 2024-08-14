import { useAtomValue } from 'jotai'
import { useEffect, useRef } from 'react'
import { sidebarWidthAtom } from '../state/atoms'

export default function Main() {
    const mainRef = useRef<HTMLBaseElement | null>(null)
    const sidebarWidth = useAtomValue(sidebarWidthAtom)

    useEffect(() => {
        if (!mainRef.current) return
        mainRef.current.style.marginLeft = `${sidebarWidth}px`
    }, [sidebarWidth, mainRef.current])

    return (
        <main ref={mainRef}>
        </main>
    )
}
