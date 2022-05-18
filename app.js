let base = document.querySelector('.base');
const premiereCase = document.getElementById('premiere-case');
const boxs = document.querySelectorAll('.case');
const detruire = document.querySelector('.detruire');
const rotation = document.querySelector('.rotation');
const allCases = [];
let indexPhoto = 1;
let sujet = "paris"

for (i = 0; i < boxs.length; i++){
    allCases.push(boxs[i]);
}
allCases.push(detruire);

    base.style.backgroundImage = `url(https://loremflickr.com/320/240/${sujet}=${indexPhoto})`


rotation.addEventListener('click', rotationCase);

function rotationCase() {

    if (premiereCase.classList.value == 'case') {
        premiereCase.classList.replace('case', 'case-H');
        // base.classList.replace('base', 'base-H');
        base.remove();
        nvBaseH();
    } else {
        premiereCase.classList.replace('case-H', 'case');
        base.remove();
        nvBase();
    }
    console.log(allCases);
}

function nvBaseH() {
    
    const nvBase = document.createElement('div');
    nvBase.setAttribute('class', 'base-H');
    nvBase.setAttribute('draggable', 'true');
    indexPhoto++;
    nvBase.style.backgroundImage = `url(https://loremflickr.com/320/240/${sujet}=${indexPhoto})`
    premiereCase.appendChild(nvBase);
    base = nvBase
}

function nvBase() {
    
    const nvBase = document.createElement('div');
    nvBase.setAttribute('class', 'base');
    nvBase.setAttribute('draggable', 'true');
    indexPhoto++;
    nvBase.style.backgroundImage = `url(https://loremflickr.com/240/320/${sujet}=${indexPhoto})`
    premiereCase.appendChild(nvBase);
    base = nvBase
}

for (const vide of allCases) {
    
    vide.addEventListener('dragover', dragover);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('drop', dragDrop);
}

function dragDrop() {
    
    if (this.id === "premiere-case") {
        return;
    }
    if (this.id === "detruire") {
        if (premiereCase.classList.value == 'case') {
            base.remove();
            nvBase();
        } 
        else {
            base.remove();
            nvBaseH(); 
        }
        return;
    } 
       

    this.appendChild(base);
    nvBase();
}
function dragover(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
}

