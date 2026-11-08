import {test, expect} from 'playwright/test';
import { LinkRaiderPage }  from '../pages/linkraider-page';

test.describe('linkraider login page', () => {
    let lr : LinkRaiderPage;
    
    test.beforeEach(async ({page}) => {
        lr = new LinkRaiderPage(page);
    });

    test('landing page themes default', async ({page}) => {
        await page.goto('https://www.linkraider.com');
        await expect(page).toHaveTitle('linkraider');

        // close the cookie banner 
        await lr.loginPage.cookieBanner.closeButton.click();

        // checks on the theme buttons state
        await expect(lr.loginPage.defaultThemeButton).toBeVisible();
        await lr.loginPage.defaultThemeButton.click();
        
        // check that the default theme is selected and that the other themes are not selected
        await expect(lr.loginPage.defaultThemeButton).toBeVisible();
        await lr.loginPage.defaultThemeButton.click();
        await expect(lr.loginPage.bgCatImage).not.toBeAttached();
        await expect(lr.loginPage.bgDogImage).not.toBeAttached();
        await expect(lr.loginPage.eightiesThemeButton).not.toHaveCSS('box-shadow', 'rgba(255, 63, 255, 0.25) 0px 0px 0px 2px');

        // check that the other themes are selected and that the default theme is not selected
        await lr.loginPage.catThemeButton.click();
        await expect(lr.loginPage.bgCatImage).toBeAttached();
        await expect(lr.loginPage.bgDogImage).not.toBeAttached();
        await expect(lr.loginPage.eightiesThemeButton).not.toHaveCSS('box-shadow', 'rgba(255, 63, 255, 0.25) 0px 0px 0px 2px');

        // check that the other themes are selected and that the default theme is not selected
        await lr.loginPage.dogThemeButton.click();
        await expect(lr.loginPage.bgCatImage).not.toBeAttached();
        await expect(lr.loginPage.bgDogImage).toBeAttached();
        await expect(lr.loginPage.eightiesThemeButton).not.toHaveCSS('box-shadow', 'rgba(255, 63, 255, 0.25) 0px 0px 0px 2px');

        // check that the other themes are selected and that the default theme is not selected
        await lr.loginPage.eightiesThemeButton.click();
        await expect(lr.loginPage.bgCatImage).not.toBeAttached();
        await expect(lr.loginPage.bgDogImage).not.toBeAttached();
        await expect(lr.loginPage.eightiesThemeButton).toHaveCSS('box-shadow', 'rgba(255, 63, 255, 0.25) 0px 0px 0px 2px');
    });

    test ('login page cookie banner', async ({page}) => { 
        await page.goto('https://www.linkraider.com/');
        await lr.loginPage.cookieBanner.manageCookiesButton.click();
        await expect(lr.loginPage.cookieBanner.toggleSwitch('Essential')).toBeChecked();
        await expect(lr.loginPage.cookieBanner.toggleSwitch('Analytics')).not.toBeChecked();
        await expect(lr.loginPage.cookieBanner.toggleSwitch('Social & embeds')).not.toBeChecked();
        await lr.loginPage.cookieBanner.savePrefrencesButton.click();
    });

    test ('non-existent user login', async ({page}) => {
        await page.goto("http://www.linkraider.com/");
        await lr.loginPage.cookieBanner.closeButton.click();
        await lr.loginPage.username.fill("no-user");
        await lr.loginPage.password.fill("no-password");
        await lr.loginPage.loginButton.click();
        await expect(lr.loginPage.validationMessage).toBeVisible();
        await expect(lr.loginPage.validationMessage).toHaveCSS('color', 'rgb(239, 68, 68)');
    });

    test ('login with test user', async ({page}) => {
        await page.goto("http://www.linkraider.com/");
        await lr.loginPage.cookieBanner.closeButton.click();
        await lr.loginPage.exploreAsGuest.click();
        await lr.onboardingPage.nextButton.click();
        await lr.onboardingPage.nextButton.click();
        await lr.onboardingPage.previousButton.click();
        await lr.onboardingPage.previousButton.click();
        await lr.onboardingPage.nextButton.click();
        await lr.onboardingPage.nextButton.click();
        await lr.onboardingPage.closeButton.click();
    });
});
