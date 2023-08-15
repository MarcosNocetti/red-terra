export const storeData = async (key: string, value: any): Promise<void> => {
  try {
    await window.localStorage.setItem(key, JSON.stringify(value))
  } catch (errors) {
    // saving error
  }
}

export const getData = async (key: string): Promise<any> => {
  const value: string | null = await window.localStorage.getItem(key)

  if (!value) {
    return null
  }

  return JSON.parse(value)
}

export const removeData = async (key: string): Promise<void> => {
  try {
    const itHasData = await getData(key)
    if (itHasData !== null) {
      await window.localStorage.removeItem(key)
    }
  } catch (errors) {
    // error removing value
  }
}

export const clearData = async (): Promise<void> => {
  try {
    await window.localStorage.clear()
  } catch (errors) {
    // error clearing data
  }
}
