Cypress.config("defaultCommandTimeout", 20000);
describe("Backup generation", () => {
  beforeEach(() => {
    cy.openInitial();
    cy.clickOnView("Backups");
  });

  after(() => {
    cy.closeInLive();
  });

  it("backups page can be opened", () => {
    cy.contains("Generar nuevo backup");
  });

  it("backups can be generated", () => {
    cy.contains("Generar nuevo backup").click();
    cy.contains("Se ha creado correctamente el backup");
  });

  it("dropdown to restore backup exists and is clickable", () => {
    cy.get(".p-dropdown-trigger-icon").click();
  });

  it("dropdown to restore backup has a restore option", () => {
    cy.get(".p-dropdown-trigger-icon").click();
    cy.get(".p-dropdown-item").first().click();
    cy.contains("Se ha restaurado correctamente el backup");
  });
});
