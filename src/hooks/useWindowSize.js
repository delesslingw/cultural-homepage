import { createContext, useContext, useEffect, useState } from 'react'
const Context = createContext()

export const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    loaded: false,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // console.log('window resize?')
      // Set window width/height to state
      // console.log(window.innerHeight)
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        loaded: true,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <Context.Provider value={windowSize}>
      {windowSize.loaded ? children : null}
    </Context.Provider>
  )
}
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  // Empty array ensures that effect is only run on mount
  return useContext(Context)
}

export default useWindowSize
