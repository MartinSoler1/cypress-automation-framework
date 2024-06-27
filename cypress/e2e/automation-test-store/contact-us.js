/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Test Contact Us form via automation Test Store", () => {
  before(() => {
    cy.viewport(550, 750);
    cy.fixture("userDetails").as("user");
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href$='contact']")
      .click()
      .then(function (linkContent) {
        cy.log("Clicked on the link: " + linkContent.text());
      });
    // cy.xpath('//a[contains(@href,"contact")]').click();
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });

    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("enquiry here");
    cy.get("#ContactUsFrm_enquiry");
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
