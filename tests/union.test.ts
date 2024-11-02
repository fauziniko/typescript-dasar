describe('Union', () => {
    it('should ', () => {
        let sample : number | string | boolean = "fauzi";
        console.info(sample);

        sample = 100 ;
        console.info(sample);

        sample = true ;
        console.info(sample);


    });
    it('Should be able to create a new tipe data.', () => {
        function process(value: number | string | boolean) {
        if (typeof (value) === 'string') {
            }else if (typeof (value) === 'number') {

            }else {
            return !value;
             }
        expect(process("niko")).toBe("NIKO");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
        }
    })
})