// Writconst { expect } = require("chai");
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
     
    it("result should be a string", () =>{
        const result = polybius("thinkful")
        expect(result).to.equal("4432423352125413")
    })
    it("number of characters in string should be even", () => {
        const result = polybius("3", false)
        expect(result).to.equal(false)
    })
    it("should maintain spaces throughout", () => {
        const result = polybius("Hello World")
        expect(result).to.equal("51131343 43241341")   
     })
    it("should handle i and j correctly", () => {
        const result = polybius("4432423352125413", false)
        expect(result).to.equal("th(i/j)nkful")
    })
})