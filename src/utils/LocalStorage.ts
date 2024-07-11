const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

const getItem = (key: string) => {
  return localStorage.getItem(key)
}

const removeItem = (key: string) => {
  localStorage.removeItem(key)
}

const clearStorage = () => {
  localStorage.clear()
}

export { setItem, getItem, removeItem, clearStorage }
