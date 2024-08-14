import { atomWithStorage } from 'jotai/utils'

const sidebarWidthAtom = atomWithStorage('sidebarWidth', 320)
const sidebarCollapsedAtom = atomWithStorage('sidebarCollapsed', false)

export { sidebarWidthAtom, sidebarCollapsedAtom }
