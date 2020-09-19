/* @Types */
import { AccordionSubject, Subject, Observer } from '../../types';

export abstract class AccordionBaseObserver implements Observer {
    abstract update(context: Subject): void;

    static controlAttribute = 'data-accordion-control';

    static contentAttribute = 'data-accordion-content';

    public mainElement: HTMLElement = null;

    constructor(mainItem: string) {
        this.mainElement = document.querySelector(mainItem);
    }

    protected getActiveControl(activeItem: string): HTMLElement | null {
        if (!activeItem) {
            return null;
        }

        const activeControlSelector = `[${AccordionBaseObserver.controlAttribute}=${activeItem}]`;

        return this.mainElement.querySelector(activeControlSelector);
    }

    protected getActiveContent(activeItem: string): HTMLElement | null {
        if (!activeItem) {
            return null;
        }

        const activeContentSelector = `[${AccordionBaseObserver.contentAttribute}=${activeItem}]`;

        return this.mainElement.querySelector(activeContentSelector);
    }

    protected get controls(): HTMLElement[] {
        const controlsSelector = `[${AccordionBaseObserver.controlAttribute}]`;

        return Array.from(this.mainElement.querySelectorAll(controlsSelector));
    }

    protected get contents(): HTMLElement[] {
        const contentsSelector = `[${AccordionBaseObserver.contentAttribute}]`;

        return Array.from(this.mainElement.querySelectorAll(contentsSelector));
    }

    static addEventListener(mainItem: string, accordion: AccordionSubject) {
        const mainElement = document.querySelector(mainItem);
        const controlsSelector = `[${AccordionBaseObserver.controlAttribute}]`;
        const controls = mainElement.querySelectorAll(controlsSelector);

        Array.from(controls).forEach((control) => {
            control.addEventListener('click', (e: MouseEvent) => {
                const targetElement = e.target as HTMLElement;
                const controlValue = targetElement.getAttribute(
                    AccordionBaseObserver.controlAttribute
                );

                if (!controlValue) {
                    return;
                }

                accordion.updateActiveItem(controlValue);
            });
        });
    }
}
