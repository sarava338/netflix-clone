import { useEffect, useState } from "react"

const useLocalStorage = (key, value) => {

  const [state, setState] = useState(()=>{
    const localStorageValue = localStorage.get(key)
    return localStorageValue !== null ? JSON.stringify(localStorageValue) : value
  })
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  
  return [state,setState]
}

export default useLocalStorage
