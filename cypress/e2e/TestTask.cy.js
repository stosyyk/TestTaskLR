describe('Test Task', () => {
    it('Passed', () => {
        cy.visit('/');
        cy.contains('New Arrivals').click();
        cy.contains('ACME Cup').click();
        cy.contains('Add To Cart').click();
        for (let i = 0; i < 4; i++) {
            cy.get('button.Quantity_actions__C9fVt').eq(2).click();
        }


        cy.get('div.flex.justify-between.border-t.border-accent-2.py-3.font-bold.mb-2 > span:nth-child(2)')
            .should('contain', '$125.00');


        cy.get('div.Sidebar_root__hUV6J > div > section > div > div > div > header > button').click();
        cy.get('div.Navbar_root__oKPSU > div > div.Navbar_nav__FsbqY > div:nth-child(1) > nav > a:nth-child(3)').click();
        cy.contains('Quarter Zip').click();
        cy.get('div.ProductView_sidebar__pNv5P > div:nth-child(1) > div:nth-child(2) > div > button:nth-child(2)').click();
        cy.get('div.ProductView_sidebar__pNv5P > div:nth-child(4) > button').click();


        cy.get(' ul > li:nth-child(1) > div.flex.flex-row.space-x-4.py-4 > div.flex-1.flex.flex-col.text-base > a > span')
            .should('contain', 'Quarter Zip');

        cy.get(' ul > li:nth-child(2) > div.flex.flex-row.space-x-4.py-4 > div.flex-1.flex.flex-col.text-base > a > span')
            .should('contain', 'ACME Cup');


        cy.get('div:nth-child(2) > span');


        cy.get('div.flex.justify-between.border-t.border-accent-2.py-3.font-bold.mb-2 > span:nth-child(2)')
            .should('contain', '$215.00');


        cy.contains('Proceed to Checkout').click();

        cy.get('#checkout_email_or_phone').type('test@gmail.com');
        cy.get('#checkout_shipping_address_last_name').type('Test');
        cy.get('#checkout_shipping_address_address1').type('Lviv');
        cy.get('#checkout_shipping_address_zip').type(79000);
        cy.contains('Continue to shipping').click();
        cy.get('#checkout_shipping_rate_id_usps-prioritymailinternational-58_26').click();
        cy.get('#continue_button').click()
        cy.get('body > div > div > div > main > div.step > div > form > div > div.section__content > div')
            .should('contain', 'This store can’t accept payments right now.')
    })
})