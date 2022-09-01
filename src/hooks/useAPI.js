import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

const useAPI = () => {
  return useContext(Context)
}

export default useAPI

export const APIProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState([])
  const [directory, setDirectory] = useState([])
  useEffect(() => {
    fetch('/api')
      .then((o) => o.json())
      .then((o) => {
        // TODO: Preload all of the images:https://jack72828383883.medium.com/how-to-preload-images-into-cache-in-react-js-ff1642708240
        setContent(o)
        fetch('/api/directory')
          .then((o) => o.json())
          .then((o) => {
            console.log(o)
            setDirectory(o)
            setIsLoading(false)
          })
      })
      .catch(console.error)
  }, [])
  return (
    <Context.Provider value={{ content, isLoading, directory }}>
      {isLoading ? null : children}
    </Context.Provider>
  )
}
