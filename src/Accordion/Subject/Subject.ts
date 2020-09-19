/* @Types */
import { AccordionSubject, Observer } from '../types';

export class AccordionLogic implements AccordionSubject {
    private observers: Set<Observer> = new Set<Observer>();

    public activeItem: string = '';

    subscribe(observer: Observer): void {
        const inObserverExists = this.observers.has(observer);

        if (inObserverExists) {
            return;
        }

        this.observers.add(observer);
    }

    unsubscribe(observer: Observer): void {
        const inObserverExists = this.observers.has(observer);

        if (inObserverExists) {
            return;
        }

        this.observers.delete(observer);
    }

    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    updateActiveItem(activeItem: string): void {
        this.activeItem = this.activeItem === activeItem ? '' : activeItem;

        this.notify();
    }
}
