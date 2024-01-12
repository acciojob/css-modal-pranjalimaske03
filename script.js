// Open modal
cy.get("#openModal").click();

// Click the close button inside the modal
cy.get(".close-modal").click();

// Verify that the modal is closed
cy.get(".modal").should("have.css", "display", "none");
