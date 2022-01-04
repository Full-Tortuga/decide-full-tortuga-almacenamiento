describe("Initial view of the system", () => {
  beforeEach(() => {
    cy.openInitial();
  });

  it("frontpage can be opened", () => {
    cy.contains("Votaciones");
    cy.closeInLive();
  });
});
