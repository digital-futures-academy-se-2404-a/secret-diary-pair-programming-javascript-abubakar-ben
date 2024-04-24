export default class Diary {
  #entries = [];

  constructor(Lock) {
    if(lock)
    hasLock = 
  }

  getLength() {
    return this.#entries.length;
  }
  addEntry(entry) {
    if (entry?.id === undefined) return;
    this.#entries.push(entry);
  }

  hasEntry(entry) {
    return this.#entries.includes(entry);
  }

  getEntry(id) {
    for (const entry of this.#entries) {
      if (entry.id === id) return entry;
    }
    return undefined;
  }
}
