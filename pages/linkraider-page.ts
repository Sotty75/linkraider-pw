import {BasePage} from '../core/base-page';
import {LoginPage} from './login-page';
import {OnboardingPage} from './onboarding-page';
import { LeftPanel } from './left-panel';

export class LinkRaiderPage extends BasePage {
    readonly loginPage = new LoginPage(this.page);
    readonly onboardingPage = new OnboardingPage(this.page);
    readonly leftPanel = new LeftPanel(this.page);    
}