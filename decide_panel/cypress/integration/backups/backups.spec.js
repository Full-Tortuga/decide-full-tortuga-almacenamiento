describe("Conection test",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/");
    })

    it('backups page can be opened', ()=>{
        cy.contains('Backups').click()
        cy.contains('Generar nuevo backup')
    })
}
)
