const { post } = require("cypress/types/jquery")


  it('Blackmarket - login', () => {
    cy.api({
      method: 'POST',
        url: '/api/v2/users/sign_in',
        headers: {  
          "user": {
            "email": "john.doe@example.com",
            "password": "John",
            "password_confirmation": "Doe",
            "name": "Juan",
            "nickname": "juanma"
       }}})}
    ).then((response) => {
        expect(response.status).to.eq(200)
 
    },

    
    ),

    it('Blackmarket - Logout',function() {
      const body = {}
      cy.api({
  
        method: 'DELETE',
        url: '/api/v1/users/sign_out',
    
      }).then((response) => {
          expect(response.status).to.eq(200)
      },
  
      
      )}),

      it('Blackmarket - Sign up', function() {
        cy.api({
          method: 'POST',
            url: '/api/v1/users',
            headers: {  
              "user": {
                "email": "john.res@example.com",
                "password": "John",

           }}
          })})
  
