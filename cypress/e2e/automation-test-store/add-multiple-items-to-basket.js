/// <reference types="cypress" />
import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Hompepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";

describe("Add multiple items to basket", () => {
  const autoStore_HomePage_PO = new AutoStore_Homepage_PO();
  const autoStore_HairCare_PO = new AutoStore_HairCare_PO();
  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    autoStore_HomePage_PO.accessHomePage();
    autoStore_HomePage_PO.clickOn_HairCare_Link();
  });
  it("Add specific items to basket", () => {
    autoStore_HairCare_PO.addHairCareProductsToBasket();
  });
});
