"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("../src/enum");
describe('Enum', () => {
    it('Should return true if the value is true', () => {
        const customer = {
            id: 1,
            name: "niko",
            type: enum_1.CustomerType.GOLD,
        };
        console.info(customer);
    });
});
