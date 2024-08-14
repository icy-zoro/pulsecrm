import { sidebarWidthAtom, sidebarCollapsedAtom } from '../state/atoms'
import { sideBarBreakpoints } from '../constants'
import { useAtom } from 'jotai'

export function useSidebarResize () {
  const [sidebarWidth, setSidebarWidth] = useAtom(sidebarWidthAtom)
  const [collapsed, setCollapsed] = useAtom(sidebarCollapsedAtom)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
    setSidebarWidth(Math.max(sidebarWidth, sideBarBreakpoints.expanded))
  };

  const startResize = () => {
    if (collapsed) {
      return;
    }

    const handleResize = (e: MouseEvent) => {
      const width = Math.min(
        sideBarBreakpoints.max,
        Math.max(e.clientX, sideBarBreakpoints.expanded)
      );

      setSidebarWidth(width);
    };

    const stopResize = () => {
      document.body.classList.remove('no-select');
      window.removeEventListener('mousemove', handleResize)
      window.removeEventListener('mouseup', stopResize)
      document.getElementById('col-cursor')?.remove();
    };

    document.body.classList.add('no-select');
    window.addEventListener('mousemove', handleResize);
    window.addEventListener('mouseup', stopResize)

    const cursorStyle = document.createElement('style');
    cursorStyle.id = 'col-cursor';
    cursorStyle.innerHTML = '* {cursor: col-resize!important;}';
    document.head.appendChild(cursorStyle);
  };

  return {
    toggleSidebar,
    startResize
  };
}
