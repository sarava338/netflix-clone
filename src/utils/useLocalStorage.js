import { useEffect, useState } from "react"

const useLocalStorage = (key, value) => {

  const [state, setState] = useState(()=>{
    const localStorageValue = window.localStorage.getItem(key)
    return localStorageValue ? JSON.stringify(localStorageValue) : String(value)
  })
  
  useEffect( () => window.localStorage.setItem(key, JSON.stringify(value)), [value, key] )
  
  return [state,setState]
}

export default useLocalStorage
