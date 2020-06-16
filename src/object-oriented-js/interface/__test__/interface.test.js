import Interface from "../Interface"

describe("Interface class", () => {
  const invalidMethodName = [0, 24, { name: "invalid" }]
  const compositeInterface = {
    name: "Composite",
    methods: ["add", "remove", "getChild"],
  }
  const formItemInterface = {
    name: "FormItem",
    methods: ["save"],
  }
  describe("constructor", () => {
    it("should throw if not called with exactly 2 arguments", () => {
      expect(() => {
        new Interface()
      }).toThrow(/argument/)
      expect(() => {
        new Interface(formItemInterface.name, ...invalidMethodName)
      }).toThrow(/argument/)
    })
    it("should not throw if called with exactly 2 arguments", () => {
      expect(() => {
        new Interface(compositeInterface.name, compositeInterface.methods)
      }).not.toThrow(/arguments/)
    })
    it("should throw if expected method names are not strings", () => {
      expect(() => {
        new Interface(compositeInterface.name, invalidMethodName)
      }).toThrow(/string/)
    })
    it("should not throw if all method names are strings", () => {
      expect(() => {
        new Interface(compositeInterface.name, compositeInterface.methods)
      }).not.toThrow(/string/)
    })
  })

  describe("ensureImplements", () => {
    it("should throw if called with less than 2 arguments", () => {
      expect(() => {
        new Interface()
      }).toThrow(/least\s+2/)
    })
    it("should throw if not called with instances of the Interface class", () => {
      expect(() => {
        new Interface()
      }).toThrow(/instances\s+of\s+Interface/)
    })
    it("should throw if the class doesn't implement any of the specified interface methods", () => {
      expect(() => {
        new Interface()
      }).toThrow(/Method.*not\s+found/)
    })
  })
})
