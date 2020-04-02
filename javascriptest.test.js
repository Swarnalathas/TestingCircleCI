
const {
    capitalize

} = require("./javascripttest");

describe("capitalize", () => {
    test("returns a capitalized string", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    test("does nothing if the string is already capitalized", () => {
        expect(capitalize("Hello")).toBe("Hello");
    });

    test("capitalizes the first character if the string is a sentence", () => {
        expect(capitalize("the quick fox")).toBe("The quick fox");
    });


})