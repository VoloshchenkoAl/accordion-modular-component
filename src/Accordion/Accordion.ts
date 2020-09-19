/* @Subject */
import { AccordionLogic } from './Subject';

/* @Observers */
import { AccordionBaseObserver } from './Observers/Base';
import { AccordionUIObserver } from './Observers/UI';
import { AccordionAriaObserver } from './Observers/Aria';
import { AccordionAnimationObserver } from './Observers/Animation';

export class Accordion {
    private mainItem: string;

    constructor(mainItem: string) {
        this.mainItem = mainItem;
    }

    init() {
        const accordion = new AccordionLogic();
        const accordionInterfaceObserver = new AccordionUIObserver(
            this.mainItem
        );
        const accordionAriaObserver = new AccordionAriaObserver(this.mainItem);
        const accordionAnimationObserver = new AccordionAnimationObserver(
            this.mainItem
        );

        accordion.subscribe(accordionInterfaceObserver);
        accordion.subscribe(accordionAriaObserver);
        accordion.subscribe(accordionAnimationObserver);

        AccordionBaseObserver.addEventListener(this.mainItem, accordion);
    }
}
