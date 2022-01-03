describe("Conection test",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/");
    })

    it('frontpage can be opened', ()=>{
        cy.contains('Votaciones')
    })
}
)
