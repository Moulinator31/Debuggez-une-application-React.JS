/**
 * 
 */
function getMonth(date) {
    const months = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];

    return months[date.getMonth()];
}

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const date = new Date('2002-01-01');
            
            expect(getMonth(date)).toBe("janvier");
        });
        
        it("the function return juillet for 2022-07-08 as date", () => {
            const date = new Date ('2022-07-08');
        
            expect(getMonth(date)).toBe("juillet")
        });
    });
})
