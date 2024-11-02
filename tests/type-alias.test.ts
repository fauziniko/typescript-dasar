import {Category} from "../src/type-alias";

describe('TypeAlias', () => {
    it('Should return an array of types', () => {
        const category: Category = {
            id: "1",
            name: "handphone"
        }

        const product: Product = {
            id: "1",
            name: "samsung",
            price: 1000000,
            category: category
        }

    })
})