import { BasePage } from "../core/base-page";

export class InterestsPage extends BasePage {

    getByName(name: string) {
        return this.page.getByRole("button", { name: name });
    }
}