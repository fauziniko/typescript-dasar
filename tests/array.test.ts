describe('Array', () => {
    it('Should return an array', () => {
        const names = ['fauzi', 'niko','ali']
        const values = [1, 2, 3,];

        console.info(names)
        console.info(values);
    })

    it('Should support raedonlyarray', () => {
        const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];
        console.info(hobbies);
        console.info(hobbies[1]);
        console.info(hobbies[2]);
    })
    it('Should support tupple', () => {
        const person: readonly [string, number] = ["fauzi",20];
        console.info(person);
    })
})