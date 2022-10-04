const { expect } = require("chai");
const { caesar } = require("../src/caesar");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {

    it("should maintain spaces throughout", () => {
        const result = substitution("You are an excellent spy", 
        "xoyqmcgrukswaflnthdjpzibev");
        expect(result).to.equal("elp xhm xf mbymwwmfj dne")
 })
    it("alphabet parameter must be a string exactly 26 characters", () =>{
        const result = substitution("input", "ylommsu")
        expect(result).to.equal(false)
    })
    it("all characters in alphabet parameter must be unique", () => {
        const result = substitution("input", "abbaacc");
        expect(result).to.equal(false)
    })
})