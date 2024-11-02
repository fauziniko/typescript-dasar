"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const say_hello_1 = require("../src/say-hello");
describe('say-Hello', () => {
    it('returns Hello fauzi', () => {
        expect((0, say_hello_1.sayHello)('fauzi')).toBe('Hello fauzi');
    });
});
