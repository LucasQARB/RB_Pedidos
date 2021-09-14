/// <reference types= "cypress"/>

describe('should test at a funcional level', () => {
    before(() => {
    cy.visit('http://172.30.1.251:8006/Login')
})

it('login',() => {
    cy.get('#inputUser').type('lucasqa')
    cy.get('#inputPassword').type('277283')
    cy.get('.btn').click()
    //cy.get('#ext-gen249').click()
    cy.get('#ext-gen263').click()
    cy.get('#padrao-20022016 > .popupBoxClose').click()
    cy.get('#padrao-20022015 > .popupBoxClose').click()
    cy.get('#dropdown_menu_seta_pedido > .x-btn-small > :nth-child(2) > .x-btn-mc > .x-btn-arrow').click()
    ///cy.get('#ext-comp-1034').click
    cy.get('#ext-gen286').click()

    /// Criar um novo Pedido
    cy.get('#ext-gen323').click()
    cy.get('#ext-gen486 > .x-grid3-header-offset > table > thead > .x-grid3-hd-row > .x-grid3-td-checker > .x-grid3-hd-inner > .x-grid3-hd-checker').click()
    /// colocar data
    ///cy.get('#periodo_inicio').type('13/09/2021')
    ///cy.get('#periodo_fim').type('25/09/2021')
    ///cy.get('input').type('{alt}')

    /// Selecionar pedidos check box

    

        

})

})