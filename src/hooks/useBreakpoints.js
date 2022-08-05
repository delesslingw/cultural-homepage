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
    breakpoint: 'xl',
  }
  return <Context.Provider value={breakpoints}>{children}</Context.Provider>
}
export default function useBreakpoints() {
  const breakpoints = useContext(Context)

  if (breakpoints.isXs) breakpoints.breakpoint = 'xs'
  if (breakpoints.isSm) breakpoints.breakpoint = 'sm'
  if (breakpoints.isMd) breakpoints.breakpoint = 'md'
  if (breakpoints.isLg) breakpoints.breakpoint = 'lg'
  if (breakpoints.isXl) breakpoints.breakpoint = 'xl'
  return breakpoints
}
