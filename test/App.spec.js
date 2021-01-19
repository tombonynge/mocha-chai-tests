const { assert } = require("chai");
const should = require("chai").should();

const App = require("../App");

// assert

describe("returnsTrue", () => {
    it("should return true", () => {
        assert.equal(App.returnsTrue(), true);
    });
});

describe("addValues", () => {
    it("should return a value greater than 10", () => {
        assert.isAbove(App.addValues(10, 1), 10);
        assert.isAbove(App.addValues(9, 3), 10);
    });
});

describe("bubbleSort", () => {
    it("should return an array", () => {
        let result = App.bubbleSort([1, 2, 3]);
        assert.isArray(result);
    });
    it("when passed [1,2,3] should return a sorted Array [3,2,1]", () => {
        let result = App.bubbleSort([1, 2, 3]);

        // equal does not work because of strict equality
        assert.deepEqual(result, [3, 2, 1]);
    });
    it("when passed [1,3,2] should return a sorted Array [3,2,1]", () => {
        let result = App.bubbleSort([1, 3, 2]);

        // equal does not work because of strict equality
        assert.deepEqual(result, [3, 2, 1]);
    });
});

describe("addObjectProperty", () => {
    it("should add a property with provided value to object", () => {
        let result = App.addObjectProperty({ a: 1, b: 2 }, "foo", "bar");
        assert.propertyVal(result, "foo", "bar");
    });
});

// should

describe("returnsTrue", () => {
    it("should return true", () => {
        App.returnsTrue().should.equal(true);
    });
});

describe("addValues", () => {
    it("should return a value greater than 10", () => {
        App.addValues(10, 1).should.be.above(10);
        App.addValues(9, 3).should.be.above(10);
    });
});

describe("bubbleSort", () => {
    it("should return an array", () => {
        let result = App.bubbleSort([1, 2, 3]);
        result.should.be.an.instanceOf(Array);
    });
    it("when passed [1,2,3] should return a sorted Array [3,2,1]", () => {
        let result = App.bubbleSort([1, 2, 3]);
        result.should.eql([3, 2, 1]);
    });
    it("when passed [1,3,2] should return a sorted Array [3,2,1]", () => {
        let result = App.bubbleSort([1, 3, 2]);
        result.should.eql([3, 2, 1]);
    });
});

describe("addObjectProperty", () => {
    it("should add a property with provided value to object", () => {
        let result = App.addObjectProperty({ a: 1, b: 2 }, "foo", "bar");
        result.should.have.property("foo", "bar");
    });
});
