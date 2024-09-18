describe("Test Generic", () => {
  class GenericClass<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }
  }

  function GenericFunction<T>(value: T): T {
    return value;
  }
  it("should can only accept one type", () => {
    const bimo = new GenericClass<string>("Bimo");
    expect(bimo.value).toBe("Bimo");
    bimo.value = "Diubah";
    expect(bimo.value).toBe("Diubah");
    // bimo.value = 123; error karena mengubah string menjadi number
    const number_data = new GenericClass<number>(123);
    expect(number_data.value).toBe(123);
  });

  it("should support generic function in typescript", () => {
    expect(GenericFunction<string>("Bimo")).toBe("Bimo");
  });
});
