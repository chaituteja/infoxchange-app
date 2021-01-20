describe("Infoxchange App test", () => {
    it('visits the app', () => {
        cy.visit('/')
    });

    it("Shows book list", () => {
        cy.visit("/");
        cy.get('h1').contains("Book List");
        cy.get('.book-item').first().find('h5').click();
        cy.get('.book-item').first().should('contain', 'Author').and('contain', 'ISBN')
      });

    it("Able to update a book", () => {
        cy.visit("/");
        cy.get('[data-target="#update1"]').should('contain', 'Update').click();
        cy.get('.modal').should('be.visible'); 
        cy.get('.modal-body').find('input[name="title"]').should('be.visible');
        cy.get('.modal-body').find('input[name="isbn"]').should('be.visible');
        cy.get('.modal-body').find('input[name="author"]').should('be.visible');
        cy.get('.modal-footer').find('button').should('contain', 'Update');
        cy.get('.modal').find('.close-x').filter(':visible').click();
    });

    it("Able to create new book", () => {
        cy.visit("/"); 
        cy.get('.create-book').should('be.visible').click();
        cy.get('.modal').should('be.visible');
        cy.get('.modal-body').find('input[name="title"]').should('have.value', '');
        cy.get('.modal-body').find('input[name="isbn"]').should('have.value', '');
        cy.get('.modal-body').find('input[name="author"]').should('have.value', '');
        cy.get('.modal-footer').find('button').should('contain', 'Create');
        cy.get('.modal-footer').find('.close-button').filter(':visible').click();
    });
});