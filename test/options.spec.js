const prettier = require("prettier");
const { describe, test, expect, beforeAll } = require("@jest/globals");

describe("prettier.config.js", () => {
    let options = null;

    beforeAll(async() => {
        options = await prettier.resolveConfig("prettier.config.js");
    });

    test("should add semicolons at the end of statements", async() => {
        // Arrange
        const source = "const foos = getFoos()";
        const expected = "const foos = getFoos();\n";
        
        // Act
        const result = await prettier.format(source, { ...options, parser: "typescript"});

        // Assert
        expect(result).toBe(expected);
    });

    test("should add traling commas and tabs to object", async() => {
        // Arrange
        const source = "const props = {\n\tfirst: 11,\n\tsecond: 10,\n};"
        const expected = "const props = {\n\tfirst: 11,\n\tsecond: 10\n};\n";

        // Act
        const result = await prettier.format(source, { ...options, parser: "typescript" });

        // Assert
        expect(result).toBe(expected);
    });

    test("should convert single quotes to single quotes", async() => {
        // Arrange
        const source = "const name = 'Strange Concheror';";
        const expected = "const name = \"Strange Concheror\";\n";
        
        // Act
        const result = await prettier.format(source, { ...options, parser: "typescript"});

        // Assert
        expect(result).toBe(expected);
    });

    test("should apply bracket spacing to an object", async() => {
        // Arrange
        const source = "const props = {first: 11,second: 10};"
        const expected = "const props = { first: 11, second: 10 };\n";

        // Act
        const result = await prettier.format(source, { ...options, parser: "typescript" });

        // Assert
        expect(result).toBe(expected);
    });
});
