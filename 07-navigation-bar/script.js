const contactPill = document.querySelector('.nav-contact-pill');
const statusText = document.querySelector('.text-secondary');
const myGmail = document.querySelector('.text-wrapper').textContent;

contactPill.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(myGmail);

        statusText.innerText = "Copied!";
        contactPill.classList.add('is-copied');

        setTimeout(() => {
            statusText.innerText = "Copy Email?";
            contactPill.classList.remove('is-copied');
        }, 1500);

    } catch (err) {
        console.error("Error while copying in clipboard: ", err);
    }
});