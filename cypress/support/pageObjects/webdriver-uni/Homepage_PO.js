class Homepage_PO {
  visitHomepage() {
    cy.visit(Cypress.env("webdriveruni_Homepage"), { timeout: 60000 });
  }
  clickOn_ContactUs_Button() {
    cy.get("#contact-us")
      .invoke("removeAttr", "target")
      .click({ force: true }, { timeout: 80000 });
  }
}

export default Homepage_PO;
