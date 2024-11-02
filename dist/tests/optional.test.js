"use strict";
describe('optional', () => {
    it('should optional', () => {
        function sayHello(name) {
            if (name) {
                console.info('hello ${name}');
            }
            else {
                console.info('hello world');
            }
        }
        sayHello('hello world');
        const name = undefined;
        sayHello(name);
    });
});
