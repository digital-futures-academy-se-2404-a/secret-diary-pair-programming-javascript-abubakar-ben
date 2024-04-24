import Diary from "./Diary.js";

export default class SecretDiary extends Diary {
  #lock;
  constructor(lock) {
    super();
    if (!lock?.getIsLocked) {
      throw new Error("Invalid argument for lock");
    }
    this.#lock = lock;
    }

    getEntry() {
        if(this.#lock.getIsLocked()){
            throw new Error("Diary is Locked");
        }
   
    }

    addEntry(entry) {
        if(this.#lock.getIsLocked()){
            throw new Error("Diary is Locked");
        }
        super.addEntry(entry);
    }
    

}