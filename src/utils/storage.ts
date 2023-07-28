export const lsStorage = (key: string) => {
  return {
    getItem() {
      return window.localStorage.getItem(key)
    },
    removeItem() {
      window.localStorage.removeItem(key)
    },
    setItem(value: string) {
      window.localStorage.setItem(key, value)
    }
  }
}

export const ssStorage = (key: string) => {
  return {
    getItem() {
      return window.sessionStorage.getItem(key)
    },
    removeItem() {
      window.sessionStorage.removeItem(key)
    },
    setItem(value: string) {
      window.sessionStorage.setItem(key, value)
    }
  }
}
