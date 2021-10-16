const counter = require("./counter")
// @ponicode
describe("counter.AddCounter", () => {
    test("0", () => {
        let callFunction = () => {
            counter.AddCounter()
        }
    
        expect(callFunction).not.toThrow()
    })
})
