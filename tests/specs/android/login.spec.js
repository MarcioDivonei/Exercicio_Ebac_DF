const { loadElements, loadFixtures, loadAssertions } = require("../../functions/loadFunctions.js");
const { checkElementAndVisibleText } = require("../../functions/common.js");
const { expect } = require('@wdio/globals');

const element = loadElements()
const fixture = loadFixtures()
const assertion = loadAssertions()



describe('Login', () => {
    it('Realizar login no painel de administrador', async () => {
        if (await $(element.home.btnSkip).isDisplayed()) {
            await $(element.home.btnSkip).click()
        }
        await $(element.home.btnLoginStore).isDisplayed({ timeout: 30000 })
        await expect($(element.home.btnLoginStore)).toHaveText(assertion.home.btnLoginStore)
        await $(element.home.btnLoginStore).click()
        await $(element.login.inputWebsiteAddress).isExisting()
        await $(element.login.inputWebsiteAddress).setValue(fixture.websiteAddress)
        await $(element.login.btnContinue).click()
        await $(element.login.inputEmailAddress).isExisting()
        await $(element.login.inputEmailAddress).setValue(fixture.login.valid.user)
        await $(element.login.btnLoginContinue).click()
        await $(element.login.avatarIcon).isDisplayed({ timeout: 30000 })
        await $(element.login.inputPassword).isExisting()
        await $(element.login.inputPassword).setValue(fixture.login.valid.password)
        await $(element.login.btnContinue).click()
        await $(element.myStoreHomePage.titleMyStoreHomePage).isDisplayed()
        await $(element.myStoreHomePage.subTitleMyStoreHomePage).isDisplayed()
        await $(element.myStoreHomePage.myStoreStats).isDisplayed()
        await $(element.myStoreHomePage.navigationButtons).isDisplayed()

        await $(element.myStoreHomePage.btnMenu).isDisplayed()
        await $(element.myStoreHomePage.btnMenu).click()
        await $(element.menu.btnConfiguration).click()
        await $(element.menu.configuration.btnLogout).click()
        await $(element.menu.configuration.btnConformLogout).isDisplayed()
        await $(element.menu.configuration.btnConformLogout).click()

        await $(element.home.btnLoginStore).isDisplayed({ timeout: 30000 })
    });
});