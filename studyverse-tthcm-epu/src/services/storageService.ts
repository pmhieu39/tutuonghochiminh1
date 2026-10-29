const IDB_NAME = 'StudyverseEdTechDB';
const IDB_STORE = 'keyval';

export const storageService = {
  getLocal<T>(key: string, fallback: T): T {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
      return fallback;
    }
  },
  setLocal<T>(key: string, value: T): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Fallback handled by IndexedDB
    }
  },
  saveIndexedDB<T>(key: string, value: T): void {
    try {
      if (!window.indexedDB) return;
      const req = window.indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = () => {
        const db = req.result;
        const tx = db.transaction(IDB_STORE, 'readwrite');
        tx.objectStore(IDB_STORE).put(value, key);
      };
    } catch {
      // Ignore IndexedDB restricted contexts
    }
  }
};
