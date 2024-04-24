import Diary from "../src/Diary.js";

describe("Diary Class Tests:", () => {
  let testDiary, testEntry, testEntryId, testLock;

  beforeEach(() => {
    testEntryId = 1;
    testEntry = jasmine.createSpyObj("testEntry", {}, { id: testEntryId });
    testLock = jasmine.createSpyObj("testLock", { isLocked: true });
    testDiary = new Diary(testLock);
  });

  afterEach(() => {
    testDiary = undefined;
    testEntry = undefined;
    testEntryId = undefined;
    testLock = undefined;
  });
  describe("Mutating entries", () => {
    it("should add an item and check entries array length has increased by 1", () => {
      //ARRANGE

      const expected = testDiary.getLength() + 1;
      //ACT
      testDiary.addEntry(testEntry);
      //ASSERT
      expect(testDiary.getLength()).toBe(expected);
    });

    it("add an item check that entry is in entries", () => {
      //ARRANGE
      //ACT
      testDiary.addEntry(testEntry);
      //ASSERT
      expect(testDiary.hasEntry(testEntry)).toBeTrue();
    });

    it("should not add null values to entries", () => {
      //ARRANGE
      //ACT
      testDiary.addEntry(null);
      //ASSERT
      expect(testDiary.hasEntry(null)).toBeFalse();
    });
  });

  describe("Accessing entries", () => {
    it("should return an entry that has been added to the diary", () => {
      //ARRANGE
      //ACT
      testDiary.addEntry(testEntry);
      //ASSERT
      expect(testDiary.getEntry(testEntry.id)).toBe(testEntry);
    });

    it("should return an not an entry that has not been added to the diary", () => {
      //ARRANGE
      //ACT
      //ASSERT
      expect(testDiary.getEntry(testEntry.id)).toBe(undefined);
    });
  });

  describe("locking entries", () => {
    it("should have a lock when lock has been added", () => {
      //ARRANGE

      //ACT

      //ASSERT
      expect(new Diary()).throw();
    });
  });
});
