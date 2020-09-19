export interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}

export interface Observer {
    update(context: Subject): void;
}

export interface AccordionSubject extends Subject {
    updateActiveItem(activeItem: string): void;
    activeItem: string;
}
