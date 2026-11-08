import {type Page} from 'playwright/test';
import {BasePage} from '../core/base-page';
import {CookieBanner} from './cookie-banner';

export class LoginPage extends BasePage {

    // fields for the login page
    readonly defaultThemeButton = this.page.getByRole('button', {name: 'Default'});
    readonly catThemeButton = this.page.getByRole('button', {name: 'Cat', exact: true});
    readonly dogThemeButton = this.page.getByRole('button', {name: 'Dog', exact: true}); 
    readonly eightiesThemeButton = this.page.getByRole('button', {name:'80s', exact: true});
    readonly bgCatImage = this.page.locator('img[src="/cat.svg"]').first();
    readonly bgDogImage = this.page.locator('img[src="/dog.svg"]').first();


    readonly username = this.page.getByRole('textbox', {name: 'Email or username'});
    readonly password = this.page.getByRole('textbox', {name: 'Password'});
    readonly loginButton = this.page.getByRole('button', {name: 'Sign in', exact: true});
    readonly exploreAsGuest = this.page.getByRole('button', {name: 'Explore as guest — no signup'});
    readonly validationMessage = this.page.getByRole('paragraph').filter({ hasText: 'Invalid credentials' });
    // readonly loginButton2 = this.page.getByRole('button', {name: "Sign in"});


    // child pages
    readonly cookieBanner = new CookieBanner(this.page);
}
