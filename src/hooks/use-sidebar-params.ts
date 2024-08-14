import { useAtomValue } from "jotai"
import { sidebarCollapsedAtom, sidebarWidthAtom } from "../state/atoms"
import { sideBarBreakpoints } from "../constants";

export function useSidebarParams () {
  const sidebarWidth = useAtomValue(sidebarWidthAtom)
  const collapsed = useAtomValue(sidebarCollapsedAtom)

  return {
    sidebarWidth: collapsed
      ? sideBarBreakpoints.collapsed
      : sidebarWidth,

    collapsed,
  };
}
