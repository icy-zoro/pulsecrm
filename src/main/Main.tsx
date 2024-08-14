import { useSidebarParams } from '../hooks/use-sidebar-params';

export default function Main() {
  const { sidebarWidth } = useSidebarParams();

    return (
        <main style={{ marginLeft: sidebarWidth }}>
          <span>Test</span>
        </main>
    )
}
