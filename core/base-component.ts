import {Page, Locator} from '@playwright/test';

export class BaseComponent 
{
    readonly root : Locator;

    constructor(
        parent : Page|BaseComponent|Locator,
        target: string | ((scope:Page|Locator) => Locator)
    )
    {
        const scope = parent instanceof BaseComponent ? parent.root : parent;
        this.root = typeof target ===  'string' ? scope.locator(target) : target(scope);
    }
}