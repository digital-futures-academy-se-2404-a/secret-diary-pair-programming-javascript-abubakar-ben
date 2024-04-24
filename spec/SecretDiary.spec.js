import SecretDiary from "../src/SecretDiary.js";

describe("locking entries:", () => {

    let testEntryId, testEntry, testLock, testSecretDiary;

  beforeEach(() => {
    testEntryId = 1;
    testEntry = jasmine.createSpyObj("testEntry", {}, { id: testEntryId });
    testLock = jasmine.createSpyObj("testLock", {
      getIsLocked: true,
    });
    testSecretDiary = new SecretDiary(testLock);
  });

  afterEach(() => {
    testSecretDiary = undefined;
    testEntry = undefined;
    testEntryId = undefined;
    testLock = undefined;
  });

  it("should have a lock when lock has been added:", () => {
    //ARRANGE

    //ACT

    //ASSERT
    expect(() => {
      new SecretDiary();
    }).toThrowError(Error, "Invalid argument for lock");
  });

  it("should not allow access to diary when diary is locked", () => {
    //ARRANGE
    //ACT

    //actual = testEntry.getEntry()
    //ASSERT
    expect(() => {
      testSecretDiary.getEntry(testEntry);
    }).toThrowError(Error, "Diary is Locked");
  });

  it("should not allow an entry to be added to diary when diary is locked", () => {
    //ARRANGE
    //ACT
    //actual = testEntry.getEntry()
    //ASSERT
    expect(() => {
      testSecretDiary.addEntry(testEntry);
    }).toThrowError(Error, "Diary is Locked");
  });

  it("should add entry when a diary is unlocked", () => {
    //ARRANGE
    //ACT
    testLock.getIsLocked.and.returnValue(false)
    testSecretDiary.addEntry(testEntry);
    //ASSERT
    expect(testSecretDiary.hasEntry(testEntry.id)).toBeTrue();
  });


});
