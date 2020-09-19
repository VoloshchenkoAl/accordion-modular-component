/* @Components */
import { Accordion } from './Accordion';

const accordion = new Accordion('.accordion-js');

document.addEventListener('DOMContentLoaded', () => {
    accordion.init();
});
