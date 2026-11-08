import { BasePage } from "../core/base-page";

export class PersonalizeExperience extends BasePage {

    readonly importButton = this.page.getByRole("button", { name: "Import bookmarks" })
    readonly letsGoButton = this.page.getByRole("button", { name: "Let's go!" })

}