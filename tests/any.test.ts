describe('any()', () => {
    it('should return true if no value is given', () => {
    const person: any = {
        id: 1,
        name: 'John',
        age: 20
    };
    person.age = 21
    person.address = 'indonesia';

    console.info(person);
    })
})