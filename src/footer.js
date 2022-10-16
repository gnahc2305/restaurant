export default function createFooter() {
    const footer = document.createElement('footer');
    const a = document.createElement('a');

    a.textContent = 'By: Andres Chang';
    a.href = 'https://github.com/gnahc2305/restaurant'

    footer.appendChild(a);
    content.appendChild(footer);
}