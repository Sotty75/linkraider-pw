import {BasePage} from '../core/base-page';
import {PersonalizeExperience} from './personalize-experience';

export class OnboardingPage extends BasePage {

    readonly nextButton = this.page.getByRole("button", {name: "Next"});    
    readonly previousButton = this.page.getByRole("button", {name: "Previous"});
    readonly personalizeExperience = new PersonalizeExperience(this.page);
    readonly closeButton = this.page.getByRole("button", {name: "Close", exact: true});
}
