export type ID = string | number;

export type Category = {
    id: ID;
    name: string;
    description?: string;
}
export type product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
}