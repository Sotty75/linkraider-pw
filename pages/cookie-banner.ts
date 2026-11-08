import {BasePage} from '../core/base-page';

export class CookieBanner extends BasePage {

    // --- 1. Static Locators (One-liners, auto-typed) ---
    readonly rejectAllButton = this.page.getByRole('button', {name: 'Reject All'});
    readonly acceptAllButton = this.page.getByRole('button', {name: 'Accept All'});
    readonly manageCookiesButton = this.page.getByRole('button', {name: 'Manage Cookies'});
    readonly savePrefrencesButton = this.page.getByRole('button', {name: 'Save Preferences'});
    readonly closeButton = this.page.getByRole('button', {name: 'Close (keeps only essential cookies)'});

    // --- 2. Dynamic Locator Helpers (When you need a parameter) ---
    toggleSwitch(labelName: 'Essential' | 'Analytics' | 'Social & embeds') {
        return this.page
                .locator('[class="flex items-center justify-between"]')
                .filter({hasText: labelName})
                .locator('button[role="switch"]');
    }
}