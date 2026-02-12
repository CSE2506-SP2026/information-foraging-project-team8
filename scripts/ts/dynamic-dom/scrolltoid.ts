import { History } from '../core/router/history';
import { Router } from '../core/router/router';

export function scrollToID() {
    // Scroll to a specific staff member
    let id = localStorage.getItem("scrollToID");
    if (id != null) {
        localStorage.removeItem("scrollToID");
        let element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({block: "start", inline: "nearest"})
        }
    }
    // Make links with staff-redirect class remember what staff member to redirect to
    const links = document.querySelectorAll<HTMLAnchorElement>("a.staff-redirect");
    links.forEach((link) => {
        link.addEventListener("click", () => {
        const targetId = link.dataset.scrollto;
        if (!targetId) {
            return;
        }
        localStorage.setItem("scrollToID", targetId);
    });
});

}