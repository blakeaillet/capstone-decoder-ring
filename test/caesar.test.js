const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
    describe("badHandling", () => {
        it("should return false if shift isn't present", () => {
            const result = caesar()
            expect(result).to.equal(false)
        })
        it("should return false if the shift value is equal to 0", () => {
            const result = caesar("message", 0)
            expect(result).to.equal(false)
        })
        it("should return false if shift value is greater than 25", () => {
            const result = caesar("message", 26)
            expect(result).to.equal(false)
        })
        it("should return false if shift value is less than -25", () => {
            const result = caesar("message", -26)
            expect(result).to.equal(false)
        })
})
        it("should maintain spaces throughout", () => {
            const result = caesar("one, two", 2)
            expect(result).to.equal("qpg, vyq")
    })

        it("should handle wrapping around alphabet", () => {
            const result = caesar("z", 3)
            expect(result).to.equal("c")
        })
})