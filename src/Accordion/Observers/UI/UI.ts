/* @Components */
import { AccordionBaseObserver } from '../Base';

/* @Types */
import { AccordionSubject } from '../../types';

/* @Styles */
import './ui.scss';

export class AccordionUIObserver extends AccordionBaseObserver {
    update(context: AccordionSubject): void {
        this.updateInterface(context.activeItem);
    }

    private resetInterface() {
        this.contents.forEach((content) => {
            content.setAttribute('hidden', 'true');
            content.setAttribute('data-accordion-expanded', 'false');
        });

        this.controls.forEach((controls) => {
            controls.setAttribute('data-accordion-expanded', 'false');
        });
    }

    private updateInterface(activeItem: string): void {
        const activeContent = this.getActiveContent(activeItem);
        const activeControl = this.getActiveControl(activeItem);
        this.resetInterface();

        if (!activeContent) {
            return;
        }

        activeContent.removeAttribute('hidden');
        activeControl.setAttribute('data-accordion-expanded', 'true');
        activeContent.setAttribute('data-accordion-expanded', 'true');
    }
}
