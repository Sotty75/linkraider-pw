import {test, expect, type Page} from "@playwright/test";
import { LinkRaiderPage } from "../pages/linkraider-page";

test.describe('linkraider navigation', () => {
    let lr : LinkRaiderPage;
    let page: Page;
    
    test.beforeAll(async ({browser}) => {
        page = await browser.newPage();
        lr = new LinkRaiderPage(page);
        await page.goto("https://www.linkraider.com/");
        await lr.loginPage.cookieBanner.closeButton.click();
        await lr.loginPage.exploreAsGuest.click();
        await lr.onboardingPage.closeButton.click();
        await lr.onboardingPage.personalizeExperience.letsGoButton.click();
    });

    test('should navigate through tabs', async () => {
        await lr.leftPanel.homeButton.click();
        await lr.leftPanel.collapseButton.click();
        await lr.leftPanel.expandButton.click();
        await lr.leftPanel.collapseButton.click();
        await lr.leftPanel.expandButton.click();
        await lr.leftPanel.collapseButton.click();
        await lr.leftPanel.expandButton.click();
        await lr.leftPanel.collapseButton.click();
        await lr.leftPanel.expandButton.click();
        await lr.leftPanel.exploreButton.click();
        await lr.leftPanel.collapseButton.click();
        await lr.leftPanel.expandButton.click();
        await lr.leftPanel.collapseButton.click();
        await lr.leftPanel.expandButton.click();
        await lr.leftPanel.feedsButton.click();
        await lr.leftPanel.collapseButton.click();
        await lr.leftPanel.expandButton.click();
        await lr.leftPanel.libraryButton.click();
        await lr.leftPanel.collapseButton.click();
        await lr.leftPanel.expandButton.click();
        await lr.leftPanel.profileButton.click();
    });
});
