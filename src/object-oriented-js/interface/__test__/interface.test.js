import Interface from "../Interface"

describe("Interface class", () => {
  const invalidMethodName = [0, 24, { name: "invalid" }]
  const methodName = ["add", "remove", "getChild"]
  const interfaceName = "Composite"

  it("should throw if not constructed with exactly 2 arguments", () => {
    expect(() => {
      new Interface()
    }).toThrow(/argument/)
    expect(() => {
      new Interface(interfaceName, ...methodName)
    }).toThrow(/argument/)
  })
  it("should not throw if constructed with exactly 2 arguments", () => {
    expect(() => {
      new Interface(interfaceName, methodName)
    }).not.toThrow(/arguments/)
  })
  it("should throw if expected method names are not strings", () => {
    expect(() => {
      new Interface(interfaceName, invalidMethodName)
    }).toThrow(/string/)
  })
  it("should not throw if all method names are strings", () => {
    expect(() => {
      new Interface(interfaceName, methodName)
    }).not.toThrow(/string/)
  })
})
