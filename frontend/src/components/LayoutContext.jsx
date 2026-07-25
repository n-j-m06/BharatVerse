import { createContext, useContext } from "react";

const LayoutContext = createContext({ isShellActive: false });

export function LayoutProvider({ children }) {
  return <LayoutContext.Provider value={{ isShellActive: true }}>{children}</LayoutContext.Provider>;
}

export function useLayoutShell() {
  return useContext(LayoutContext);
}
