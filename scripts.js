
function validateForm() {
    //const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const company = document.getElementById('company').value;
    const Status = document.getElementById('Status').value;

    // phone = document.getElementById('phone').value;
    //const email = document.getElementById('email').value;

    if (!lastName || !company || !Status) {
        alert('Please fill out all required fields.');
        return false;
    }
    return true;
}

function closeModal() {
    // Logic to close the modal
    const modal = document.querySelector('.slds-modal');
    const backdrop = document.querySelector('.slds-backdrop');
    modal.classList.remove('slds-fade-in-open');
    backdrop.classList.remove('slds-backdrop_open');
}
