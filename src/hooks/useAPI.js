import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

const useAPI = () => {
  return useContext(Context)
}

export default useAPI

export const APIProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState([])
  useEffect(() => {
    fetch('/api')
      .then((o) => o.json())
      .then((o) => {
        setContent(o)
        setIsLoading(false)
      })
      .catch(console.error)
  }, [])
  return (
    <Context.Provider value={{ content, isLoading }}>
      {isLoading ? null : children}
    </Context.Provider>
  )
}
