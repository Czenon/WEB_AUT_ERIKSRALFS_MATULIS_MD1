import { SelectablePage } from "../../pageObjects/selectablePage";

describe("Demoqa MD1 ERM", () => {
    context("Grid tests", () => {
      beforeEach(() => {
        SelectablePage.visit();
      });
   
      it("Grid tab selection test", () => {
        // Implement the following scenario:
        // a. Open https://demoqa.com/selectable
        // b. Click “Grid”
        // c. Click - “Two”, “Four”, “Six”, “Eight”
        // d. Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
        // e. Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted

          SelectablePage.gridTab.click();
          SelectablePage.gridRow.contains("Two").click();
          SelectablePage.gridRow.contains("Four").click();
          SelectablePage.gridRow.contains("Six").click();
          SelectablePage.gridRow.contains("Eight").click();

          SelectablePage.gridCellActive.contains("Two");
          SelectablePage.gridCellActive.contains("Four");
          SelectablePage.gridCellActive.contains("Six");
          SelectablePage.gridCellActive.contains("Eight");

          SelectablePage.gridCellActive.contains("One").should("not.exist");
          SelectablePage.gridCellActive.contains("Three").should("not.exist");
          SelectablePage.gridCellActive.contains("Five").should("not.exist");
          SelectablePage.gridCellActive.contains("Seven").should("not.exist");
          SelectablePage.gridCellActive.contains("Nine").should("not.exist");
          
      });

      }
    )
  })