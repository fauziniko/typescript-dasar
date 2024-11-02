import {sayHello} from "../src/say-hello";

describe('say-Hello', () => {
    it('returns Hello fauzi', () => {
        expect(sayHello('fauzi')).toBe('Hello fauzi');
    })

})