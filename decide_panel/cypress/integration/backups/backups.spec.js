Cypress.config('defaultCommandTimeout', 20000);
describe("Conection test",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/");
    })

    it('backups page can be opened', ()=>{
        cy.contains('Backups').click()
        cy.contains('Generar nuevo backup')
    })

    it("backups can be generated", ()=>{
        cy.contains('Backups').click()
        cy.contains('Generar nuevo backup').click()
        cy.contains('Se ha creado correctamente el backup')
    })
    it("dropdown to restore backup exists and is clickable", ()=>{
        cy.contains('Backups').click()
        cy.get('.p-dropdown-trigger-icon').click()
    })
    it("dropdown to restore backup has a restore option", ()=>{
        cy.contains('Backups').click()
        cy.get('.p-dropdown-trigger-icon').click()
        cy.get('.p-dropdown-item').first().click()
        cy.contains('Se ha restaurado correctamente el backup')
    })
}
)
