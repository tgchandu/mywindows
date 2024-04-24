describe('My First Test', () => {
    it('Test1', () => {
        cy.visit("https://google.com")
        cy.title().should('eq','Google')
        // expect(true).to.equal(true)
    })
    it('Test2', () => {
        cy.visit("https://google.com")
        cy.title().should('not.eq','Googl')
        // expect(true).to.equal(true)
    })
  })

//   describe('My First Test', function() {
//     it('Does not do much!', function() {
//       expect(true).to.equal(true)
//     })
//   })