/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(() => {
    cy.navigateTo_WebdriverUni_Checkbox_Page();
  });
  it("Check and Validate checkbox", () => {
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("#checkboxes > :nth-child(1) > input").check();
    // cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    // cy.get("@option-1").check();
    cy.get("@option-1").check().should("be.checked");
  });
  it("Uncheck and Validate checkbox", () => {
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get(":nth-child(5) > input").as("option-32");
    cy.get("@option-32").uncheck().should("not.be.checked");
  });
  it("Check multiple checkboxes", () => {
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('input[type="checkbox"]')
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
