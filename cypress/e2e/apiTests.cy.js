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
              expect(response.body.status).to.eq("success");
              expect(response.body.status).to.be.a('string');
              expect(response.body.data.email).to.be.a('string');
              expect(response.body.data.provider).to.eq("email");
              expect(response.body.data.uid).to.be.a('string');
              expect(response.body.data.uid).to.include("@yopmail.com");
              expect(response.body.data.id).to.be.a("number");
              expect(response.body.data.allow_password_change).to.eq(false);
              expect(response.body.data.name).to.be.a("string");
              expect(response.body.data.nickname).to.be.a("string");
              expect(response.body.data.image).to.eq(null);
              expect(response.body.data.created_at).to.be.a("string");
              expect(response.body.data.updated_at).to.be.a("string");
            });
          });

  it('Blackmarket - Invalid Sign up', () => {
    
            cy.api( {
              method: 'POST',
              url:"/api/v1/users",
              failOnStatusCode: false,
              body:{
                "user": {
                    "email": "aaa",
                    "password": "Test1234",
                    "password_confirmation": "Test1234",
                    "name": "Ricky",
                    "nickname": "RickyFort"
    
              
                }}}).should((response) => {
                  expect(response.status).to.eq(422);
                  expect(response.body.status).to.eq("error");
                  expect(response.body.data.id).to.eq(null);
                  expect(response.body.data.created_at).to.eq(null);
                  expect(response.body.data.updated_at).to.eq(null);
                  expect(response.body.errors.email).to.include("is not an email");
                  expect(response.body.errors.full_messages).to.include("Email is not an email");
                });
              });    
  it("Blackmarket - Invalid Login", () => {
        cy.api({
          method: 'POST',
          url: "/api/v1/users/sign_in",
          failOnStatusCode: false,
          body:{
                    "user": {
                      "email": "john.doe@test.com",
                      "password": "Test123",
        
                 }
                }
                }).should((response) => {
                  expect(response.status).to.eq(401);
                  expect(response.body.error).to.eq( "Invalid login credentials. Please try again.");
                });
              });

  it("Blackmarket - Login", () => {
                cy.api("POST", "/api/v1/users/sign_in", {
                  
                        "user": {
                          "email": "john.doe@test.com",
                          "password": "Test1234",
                          "password_confirmation": "Test1234"
                        
                     }
                    })  .then((response) => {
                      const accessToken = response.headers.accessToken
                      Cypress.env('accessToken', accessToken)
                      expect(response.status).to.eq(200);
                      expect(response.body.data.email).to.be.a('string');
                      expect(response.body.data.provider).to.eq("email");
                      expect(response.body.data.uid).to.be.a('string');
                      expect(response.body.data.uid).to.include("@test.com");
                      expect(response.body.data.id).to.be.a("number");
                      expect(response.body.data.allow_password_change).to.eq(false);
                      expect(response.body.data.name).to.be.a("string");
                      expect(response.body.data.nickname).to.be.a("string");
                      expect(response.body.data.image).to.eq(null);
                    });
                  });
  it('Blackmarket - Logout',() => {
    const accessToken = Cypress.env('accessToken')
      cy.api({
        method: 'DELETE',
        url: "/api/v1/users/sign_out",
        failOnStatusCode: false,
        headers: {
          "access-token": `${accessToken}`,
          "client": "john.doe@test.com",
          "id": 33,

      }
      })})





  
