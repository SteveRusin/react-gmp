describe('Search page navigation scenario', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/movies*',
    }).as('getMovies');
  });

  it('should open page with default search result', () => {
    cy.visit('http://localhost:8080/');
    cy.wait('@getMovies');
    const moviesTotalElement = cy.get('[data-e2e="movies-total"]');
    moviesTotalElement.should('contain.text', 3000); // mock server returns 3000 by default
  });

  it('should get movie by query and display its info', () => {
    cy.visit('http://localhost:8080/');
    cy.wait('@getMovies');

    const searchInput = cy.get('[data-e2e="search-input"]');

    searchInput.type('amigos{enter}');

    cy.url().should('eq', 'http://localhost:8080/search/amigos');

    cy.wait('@getMovies').then((res) => {
      const movies = res.response?.body.data;

      expect(movies.length).to.eq(1);
      expect(movies[0].title).to.include('Amigos');

      cy.get('[data-testid="movie-wrapper"]').click();
      cy.get('[data-e2e="movie-details-wrapper"]').should('be.visible');
    });
  });
});

export {};
