import { faker } from '@faker-js/faker';
export let fakerName = faker.internet.email()
function generateEmail(domain = 'yopmail.com') {
  return faker.internet.email(null, null, domain);
}


  it('Blackmarket - Valid Sign up', () => {
    
        cy.api("POST", "/api/v1/users", {

              "user": {
                "email": generateEmail(),
                "password": "Test1234",
                "password_confirmation": "Test1234",
                "name": "Ricky",
                "nickname": "RickyFort"
              }
            }).should((response) => {
              expect(response.status).to.eq(200);
            });
          });

  it('Blackmarket - Invalid Sign up', () => {
    
            cy.api("POST", "/api/v1/users", {
              failOnStatusCode: false,
                    "email": "aaa",
                    "password": "Test1234",
                    "password_confirmation": "Test1234",
                    "name": "Ricky",
                    "nickname": "RickyFort"
    
              
                }).should((response) => {
                  expect(response.status).to.eq(422);
                });
              });    
  it.only("Blackmarket - Invalid Login", () => {
        cy.api("POST", "/api/v1/users/sign_in",  {

                    "user": {
                      "email": "john.doe@test.com",
                      "password": "Test123",
        
                 }
                }).should((response) => {
                  expect(response.status).to.eq(401);
                  expect(response.body).to.eq( "Invalid login credentials. Please try again.");
                });
              });

  it("Blackmarket - Login", () => {
                cy.api("POST", "/api/v1/users/sign_in", {
                  
                        "user": {
                          "email": "john.doe@test.com",
                          "password": "Test1234",
                          "password_confirmation": "Test1234"
                        
                     }
                    }).should((response) => {
                      expect(response.status).to.eq(200);
                    });
                  });
  it('Blackmarket - Logout',() => {
      cy.api("DELETE", "/api/v1/users/sign_out", {
        "uid": "otvomjkgmc@example.com",
        "id": 33,
        "access-token": "C_2k716PLGDsG7rHm3knzA",
    
      }).then((response) => {
          expect(response.status).to.eq(200)
      },
  
      
      )})




  
