export default class Diary {
  #entries = [];

  getLength() {
    return this.#entries.length;
  }
  addEntry(entry) {
    if (entry?.id === undefined) return;
    this.#entries.push(entry);
  }

  hasEntry(id) {
    return !!this.#entries.find(entry=>entry.id === id);
  }

  getEntry(id) {
    for (const entry of this.#entries) {
      if (entry.id === id) return entry;
    }
    return undefined;
  }
}
