describe("Test Generic Parameter Default", () => {
  class SimpleGeneric<T = string> {
    value?: T;
    constructor(value?: T) {
      this.value = value;
    }
  }

  function GenericFunction<T>(value: T): T {
    return value;
  }
  it("should create simple generic", () => {
    const bimo = new SimpleGeneric("Bimo");
    expect(bimo.value).toBe("Bimo");
    bimo.value = "Diubah";
    expect(bimo.value).toBe("Diubah");
    const simple = new SimpleGeneric();
    simple.value = "test";
    expect(simple.value?.toUpperCase()).toBe("TEST");
  });

  it("should support generic function in typescript", () => {
    expect(GenericFunction<string>("Bimo")).toBe("Bimo");
  });
});
