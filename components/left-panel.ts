
import { Page } from "@playwright/test";
import { BaseComponent } from "../core/base-component";

export class LeftPanel extends BaseComponent {

    constructor(readonly page: Page) {
        super(page, (scope) => scope.getByRole("complementary").first());
    }

    readonly collapseButton = this.root.getByRole("button", { name: "Collapse" });
    readonly expandButton = this.root.getByRole("button", { name: "Expand" });
    readonly homeButton = this.root.locator("a[id='tour-sidebar-home']");
    readonly libraryButton = this.root.locator("a[href='/libraries']");
    readonly exploreButton = this.root.locator("a[href='/discover']");
    readonly feedsButton = this.root.locator("a[href='/feeds']");
    readonly profileButton = this.root.locator("a[href='/profile']");
}