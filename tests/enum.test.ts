import {Customer, CustomerType} from "../src/enum";

describe('Enum', () => {
    it('Should return true if the value is true', () => {
        const customer: Customer = {
            id: 1,
            name: "niko",
            type: CustomerType.GOLD,
        };
        console.info(customer);
    })
})

