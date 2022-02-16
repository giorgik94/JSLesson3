const toggleButton = document.getElementsByClassName('burger')[0];
const navBar = document.getElementsByClassName('nav-main-div')[0];

toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

toggleButton.addEventListener('click', ()=>{
    document.getElementById('bl-2').classList.toggle('bl-2-active');
    document.getElementById('bl-1').classList.toggle('bl-1-active');
    document.getElementById('bl-3').classList.toggle('bl-3-active');
})

const clickButton = document.getElementById('submit1');
const answersDiv = document.getElementById('answer-wrapper-id');
const newInput = document.getElementById('input1');
const allDelete = document.getElementById('delete-all-id');

clickButton.addEventListener('click', ()=>{
    if(newInput.value != '') {
        const newParagraph = document.createElement('p');
        const deleteParagraph = document.createElement('p');
        newParagraph.classList.add('new-paragraph');
        newParagraph.textContent = newInput.value
        answersDiv.appendChild(newParagraph);
        deleteParagraph.textContent = "X";
        newParagraph.appendChild(deleteParagraph);
        deleteParagraph.classList.add('delete-paragraph');
        newInput.value = "";
        deleteParagraph.addEventListener('click', ()=> {
            newParagraph.remove();
        })
        allDelete.addEventListener('click', ()=>{
            newParagraph.remove();
        })
    } else {
        alert('Type Some Text');
    }
})



