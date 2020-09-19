/* @Components */
import { AccordionBaseObserver } from '../Base';

/* @Types */
import { AccordionSubject } from '../../types';

/* @Styles */
import './animation.scss';

export class AccordionAnimationObserver extends AccordionBaseObserver {
    static CONTROLS_ANIMATION_ATTR: string = 'data-accordion-control-animation';
    static CONTENT_ANIMATION_ATTR: string = 'data-accordion-content-animation';

    prevContent: string;

    constructor(mainItem: string) {
        super(mainItem);
        this.prevContent = '';

        this.setControlAnimation();
        this.setContentAnimation();
    }

    update(context: AccordionSubject): void {
        this.animate(context.activeItem);
    }

    private animate(activeItem: string): void {
        this.hidePreviousContent();
        this.animateActiveContent(activeItem);

        this.prevContent = activeItem;
    }

    private hidePreviousContent(): void {
        if (!this.prevContent) {
            return;
        }

        const activePrevContent = this.getActiveContent(this.prevContent);

        activePrevContent.removeAttribute('hidden');
        activePrevContent.style.height = '0px';
        activePrevContent.setAttribute(
            AccordionAnimationObserver.CONTENT_ANIMATION_ATTR,
            'false'
        );

        activePrevContent.addEventListener(
            'transitionend',
            function hidePrevContent() {
                activePrevContent.setAttribute('hidden', 'true');
                activePrevContent.removeEventListener(
                    'transitionend',
                    hidePrevContent
                );
            }
        );
    }

    private animateActiveContent(activeItem: string): void {
        const activeContent = this.getActiveContent(activeItem);

        if (!activeContent) {
            return;
        }

        activeContent.style.height = '';
        const animateToHeight = activeContent.offsetHeight;
        activeContent.style.height = '0px';

        requestAnimationFrame(() => {
            activeContent.style.height = `${animateToHeight}px`;
            activeContent.setAttribute(
                AccordionAnimationObserver.CONTENT_ANIMATION_ATTR,
                'true'
            );
        });
    }

    private setControlAnimation(): void {
        this.controls.forEach((control) => {
            control.setAttribute(
                AccordionAnimationObserver.CONTROLS_ANIMATION_ATTR,
                'true'
            );
        });
    }

    private setContentAnimation(): void {
        this.contents.forEach((control) => {
            control.setAttribute(
                AccordionAnimationObserver.CONTENT_ANIMATION_ATTR,
                'false'
            );
        });
    }
}
