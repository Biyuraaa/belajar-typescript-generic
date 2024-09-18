describe("Test Multiple Generic", () => {
  class Map<K, V> {
    key: K;
    value: V;
    constructor(key: K, value: V) {
      this.key = key;
      this.value = value;
    }
  }

  function GenericFunction<T>(value: T): T {
    return value;
  }
  it("should support 2 multiple generic in typescript", () => {
    const nim: Map<string, string> = new Map("nim", "187221049");
    expect(nim.key).toBe("nim");
    expect(nim.value).toBe("187221049");
  });
});
