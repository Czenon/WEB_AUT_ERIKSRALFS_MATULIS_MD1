import { BasePage } from "./basePage";

export class SelectablePage extends BasePage {
    static get url() {
        return "selectable";
    }

    static get gridTab() {
        return cy.get("a#demo-tab-grid");
    }

    static get gridRow() {
        return cy.get("li");
    }

    static get gridCellActive() {
        return cy.get("li.active");
    }

}