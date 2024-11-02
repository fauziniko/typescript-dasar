describe('Enum', () => {
    it('Should return true if the value is true', () => {
        const costumer: Cosutumer = {
            id: 1,
            name: 'test',
            type: CustumerType.GOLD
        }
        console.info(costumer);
    })
})