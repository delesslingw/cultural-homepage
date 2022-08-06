import { useState, useEffect, createContext, useContext } from 'react'

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query)
      setMatches(mediaQuery.matches)
      const handler = (event) => setMatches(event.matches)
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    },
    [query] // Empty array ensures effect is only run on mount and unmount
  )
  return matches
}
const Context = createContext()
export const BreakpointProvider = ({ children }) => {
  const breakpoints = {
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px) and (max-width: 1400px)'),
    isXl: useMediaQuery('(min-width: 1401px)'),
    active: 'xl',
  }
  return <Context.Provider value={breakpoints}>{children}</Context.Provider>
}
export default function useBreakpoints() {
  const breakpoints = useContext(Context)

  if (breakpoints.isXs) breakpoints.active = 'xs'
  if (breakpoints.isSm) breakpoints.active = 'sm'
  if (breakpoints.isMd) breakpoints.active = 'md'
  if (breakpoints.isLg) breakpoints.active = 'lg'
  if (breakpoints.isXl) breakpoints.active = 'xl'

  breakpoints.breakpoint = (bps = {}) => {
    return {
      xl: {},
      lg: {},
      md: {},
      sm: {},
      xs: {},
      ...bps,
    }[breakpoints.active]
  }
  return breakpoints
}

export const BreakpointTool = () => {
  const { breakpoint, active } = useBreakpoints()
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        padding: 5,
        backgroundColor: 'yellowgreen',
        height: '3vh',
        zIndex: 100,
        ...breakpoint({
          xl: {
            backgroundColor: 'yellowgreen',
          },
          lg: {
            backgroundColor: 'green',
          },
          md: {
            backgroundColor: 'yellow',
          },
          sm: {
            backgroundColor: 'orange',
          },
          xs: {
            backgroundColor: 'red',
          },
        }),
      }}
    >
      {active}
    </div>
  )
}
