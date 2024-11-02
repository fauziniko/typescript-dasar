describe('object', () => {
    it('Should return an object without an object', () => {
        const person: {id: number, name: string,hobbies?: string[]} = {
            id: "1",
            name: "niko"
        }

        console.info(person)

        person.id = "2";
        person.name = "samsung";

        console.info(person);

    })
})