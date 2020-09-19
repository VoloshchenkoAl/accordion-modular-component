/* @Components */
import { AccordionBaseObserver } from '../Base';

/* @Types */
import { AccordionSubject } from '../../types';

export class AccordionAriaObserver extends AccordionBaseObserver {
    constructor(mainItem: string) {
        super(mainItem);

        this.initAriaAttributes();
    }

    update(context: AccordionSubject): void {
        this.updateAria(context.activeItem);
    }

    private initAriaAttributes(): void {
        this.controls.forEach((control) => {
            const controlValue = control.getAttribute('data-accordion-control');

            control.setAttribute('aria-expanded', 'false');
            control.setAttribute('aria-controls', controlValue);
        });

        this.contents.forEach((content) => {
            const contentValue = content.getAttribute('data-accordion-content');

            content.setAttribute('id', contentValue);
        });
    }

    private resetAria(): void {
        this.controls.forEach((control) => {
            control.setAttribute('aria-expanded', 'false');
        });
    }

    private updateAria(activeItem: string): void {
        const activeControl = this.getActiveControl(activeItem);
        this.resetAria();

        if (!activeControl) {
            return;
        }

        activeControl.setAttribute('aria-expanded', 'true');
    }
}
