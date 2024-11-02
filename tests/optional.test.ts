describe('optional', () => {
    it('should optional', () => {

        function sayHello(name?: string) {
            if(name) {
                console.info('hello ${name}');
            }else {
                console.info('hello world');
            }
        }
        sayHello('hello world');
        const name: string | undefined = undefined;
        sayHello(name);

    });
});