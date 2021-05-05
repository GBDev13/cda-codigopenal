function getLocalStorage(key: string, initial: any) {
  try {
    const storage = window.localStorage.getItem(key);
    if (typeof storage === 'string') {
      return JSON.parse(storage);
    }
  } catch {
    return initial;
  }
}

export default getLocalStorage;