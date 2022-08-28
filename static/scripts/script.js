// JavaScript Document


const open = document.getElementsByClassName('open'); // GET ANY ELEMENT WITH A CLASS OF BTN FOR MODAL
const mod = document.getElementsByClassName('mod'); // GET ANY ELEMENT WITH CLASS OF MODAL

//OPEN AND CLOSE MULTIPLE MODALS
//WORKS BY INDEXING THE MODAL AND BTN CLASSES SO CLICKING ON THE 3RD ELEMENT WITH A BTN CLASS OPENS THE 3RD ELEMENT WITH THE MODAL CLASS
[...open].forEach((open, ind) => {
    open.onclick = () => (mod[ind].style.display = 'block');
});

// CLOSE MODAL ON CLICK OUTSIDE MODAL CONTENT. WORKS BY ADDING THE CLASS 'MODAL' TO THE CONTAINER ELEMENT (THAT HOLDS THE MODAL CONTENT), AND SETTING THIS TO THE FULL SIZE OF THE PAGE, SO CLICKING ANYWHERE OUTSIDE OF THE ELEMENT WITH THE MODAL CONTENT IS CLICKING ON THE ELEMENT WITH THE CLASS OF MODAL
window.onclick = (e) => {
    [...mod].forEach((mod) => {
        if (e.target == mod) {
            mod.style.display = 'none';
        }
    });
};