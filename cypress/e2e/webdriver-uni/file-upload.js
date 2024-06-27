/// <reference types="cypress" />

describe("The File Upload via webdriveruni", () => {
  it("Upload file...", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myFile").selectFile("cypress/fixtures/img.png");
    cy.get("#submit-button").click();
  });
  it.only("Upload no file...", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("You need to select a file to upload!");
    });
  });
});
