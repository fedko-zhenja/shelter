import {animalInformation} from './assets/pets-info/data.js';

let message = 'Страница Main'+ '\n' +
'1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14'+ '\n' +
'2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14'+ '\n' +
'3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14'+ '\n' + '\n' +
'Страница Pets'+ '\n' +
'4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6'+ '\n' +
'5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6'+ '\n' +
'6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6'+ '\n' + '\n' +
'7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20'+ '\n' +
'8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции +8'+ '\n' +
'9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4. Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется'+ '\n' +
'10. Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8'+ '\n' + '\n' +

'Score 100 / 100';
// alert('Здравствуйте! Не могли бы вы проверить мою работу 12.04.2023 т.е. на второй день ревью? Мой JS файл не видит путь до картинки (или он ему не подходит, я не пока не понимаю), из-за этого в карусели и в пагинации не видны картинки, и почему-то не работает попап(в коде вы можете посмотреть реализацию всего этого). Я очень старалась сделать эту работу и я всеми силами пытаюсь решить эту проблему. Очень надеюсь что вы дадите мне шанс!')

const body = document.querySelector('body');
const header = document.querySelector('.header');
const notOnlySection = document.querySelector('.not-only-section');
const main = document.querySelector('main');
const footer = document.querySelector('.footer');
const startScreen = document.querySelector('.start-screen');
const aboutSection = document.querySelector('.about-section');
const helpSection = document.querySelector('.help-section');


const bodySection = [header, notOnlySection, main, footer];

const buttonMenu = document.querySelector('.burger-icon');
// const burgerContainer = document.querySelector('.burger_navigation-container')
const burgerMenu = document.querySelector('.burger_navigation-list');

const listItem = document.querySelectorAll('.list-item');
const listItemActive = document.querySelectorAll('.active-list-item');
const burgerListItem = document.querySelectorAll('.burger-item');

const petsHeader = document.querySelector('#pets_header')

// const ourFriendSection = document.querySelector('.our-friend-section');


buttonMenu.onclick = function () {
    buttonMenu.classList.toggle('burger-icon_active');
    burgerMenu.classList.toggle('burger_navigation-list_active');

    listItem.forEach(el => {
        el.classList.toggle('list-item_active');
    })

    listItemActive.forEach(el => {
        el.classList.toggle('list-item_active');
    })

    body.classList.toggle('body_unactive');

    bodySection.forEach(el => {
        if (el !== null) {
            el.classList.toggle('dark-background');
        }
    })

    if (petsHeader !== null) {
        petsHeader.classList.toggle('gray-background');
        petsHeader.classList.toggle('dark-background')
    }

    if (aboutSection !== null) {
        aboutSection.classList.toggle('gray-background');
        aboutSection.classList.toggle('dark-background')
    }

    if (helpSection !== null) {
        helpSection.classList.toggle('gray-background');
        helpSection.classList.toggle('dark-background');
    }
};

function closeBurgerMenu() {
    buttonMenu.classList.remove('burger-icon_active');
    burgerMenu.classList.remove('burger_navigation-list_active');

    listItem.forEach(el => {
        el.classList.remove('list-item_active');
    })

    listItemActive.forEach(el => {
        el.classList.remove('list-item_active');
    })

    body.classList.remove('body_unactive');

    bodySection.forEach(el => {
        if (el !== null) {
            el.classList.remove('dark-background');
        }
    })

    if (petsHeader !== null) {
        petsHeader.classList.remove('gray-background');
        petsHeader.classList.remove('dark-background');
    }

    if (aboutSection !== null) {
        aboutSection.classList.remove('gray-background');
        aboutSection.classList.remove('dark-background')
    }

    if (helpSection !== null) {
        helpSection.classList.remove('gray-background');
        helpSection.classList.remove('dark-background');
    }
}

if (notOnlySection !== null) {
    notOnlySection.addEventListener('click', closeBurgerMenu);
}

header.addEventListener('click', closeBurgerMenu);
main.addEventListener('click', closeBurgerMenu);
footer.addEventListener('click', closeBurgerMenu);
burgerListItem.forEach(el => {
    el.addEventListener('click', closeBurgerMenu);
})

// ourFriendSection.addEventListener('click', closeBurgerMenu);

// бургер конец


// --------------------------------------------------------------------------------------------------------------------------------------------------------

// Реализация слайдера-карусели на странице Main


const mainItem = document.querySelector('.slider-item_main');
const leftItem = document.querySelector('.slider-item_left');
const rightItem = document.querySelector('.slider-item_right');
const btnRight = document.querySelector('#btn-arrow_right');
const btnLeft = document.querySelector('#btn-arrow_left');
const slider = document.querySelector('.slider');

let countClickLeft = 0;
let countClickRight = 0;

let saveCard;
let saveIndex = [];

function createCard (id, curItem, nameClass) {
    if (curItem !== null) {
        let card = document.createElement('div');
        card.classList.add('our-friend_card');
    
        if(nameClass === 2) {
            card.classList.add('pets-card_two');
        }
    
        if(nameClass === 3) {
            card.classList.add('pets-card_three');
        }
    
        let cardImg = document.createElement('img');
        cardImg.classList.add('our-friend_animals-image');
        cardImg.src = animalInformation[id].img;
    
        let cardInfo = document.createElement('div');
        cardInfo.classList.add('our-friend_card-info');
    
        let cardInfoSpan = document.createElement('span');
        cardInfoSpan.classList.add('our-friend_card-text');
        cardInfoSpan.textContent = animalInformation[id].name;
    
        let cardInfoBtn = document.createElement('button');
        cardInfoBtn.classList.add('our-friend_card-button');
        cardInfoBtn.classList.add('btn');
        cardInfoBtn.textContent = 'Learn more';
    
        cardInfo.append(cardInfoSpan, cardInfoBtn);
        card.append(cardImg, cardInfo);
        curItem.append(card);
    
        let petCards = document.querySelectorAll('.our-friend_card');
    
        petCards.forEach(el => {
        el.addEventListener('click', createPopUp);
    })
    }
}

let arr = [];

function defaultIndex () {
    
    while(arr.length < 3) {
        let number = Math.floor(Math.random() * 8);

       if (!arr.includes(number)) {
        arr.push(number);
        }
    }

    return arr;
}

defaultIndex();

function craeteCarousel () {
    let countClass = 0;
    arr.forEach(el => {
        countClass++;
        createCard(el, mainItem, countClass);
    })
    countClass = 0;
}

craeteCarousel();

let newArr;

function sliderItem () {
    newArr = [...arr];

    while(newArr.length < 6) {
        let number = Math.floor(Math.random() * 8);

        if (!newArr.includes(number)) {
            newArr.push(number);
        }
    }

    newArr.splice(0, 3);
}


function createSideItem () {
    sliderItem();
    let countClass = 0;

    newArr.forEach(el => {
        countClass++;
        createCard(el, leftItem, countClass);
        createCard(el, rightItem, countClass);
    })

    countClass = 0;
}

createSideItem();

function moveLeft () {
    slider.classList.add('transition-to-left');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
    countClickLeft++;
}

function moveRight () {
    slider.classList.add('transition-to-right');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
    countClickRight++;

}

if(btnLeft !== null) {
    btnLeft.addEventListener('click', moveLeft)
}

if(btnRight !== null) {
    btnRight.addEventListener('click', moveRight)
}

if (slider !== null) {
    
    slider.addEventListener('animationend', (AnimationEvent) => {

        if (countClickRight === 0) {
            if(AnimationEvent.animationName === 'move-to-right') {
                slider.classList.remove('transition-to-right');
                mainItem.innerHTML = rightItem.innerHTML;
            } else if (AnimationEvent.animationName === 'move-to-left') {
                slider.classList.remove('transition-to-left');
                mainItem.innerHTML = leftItem.innerHTML;
            }

            leftItem.innerHTML = '';
            rightItem.innerHTML = '';
            arr = newArr;
            createSideItem();
            if(countClickLeft > 0) {
                countClickLeft = 0;
            }
            
        }

        
        if (countClickRight > 0 && countClickLeft === 0) {
            if(AnimationEvent.animationName === 'move-to-right') {
                slider.classList.remove('transition-to-right');
                saveCard = mainItem.innerHTML;

                let amountChildren = AnimationEvent.target.children[1].children.length;
                let arrNameChildren = [];

                for (let i = 0; i < amountChildren; i++) {
                    arrNameChildren.push(AnimationEvent.target.children[1].children[i].children[1].firstChild.innerText);
                }

                let animalInformationNameArr = [];

                for (let i = 0; i < animalInformation.length; i++) {
                    animalInformationNameArr.push(animalInformation[i].name);
                }

                let allIndex = [];
                arrNameChildren.forEach(el => {
                        allIndex.push(animalInformationNameArr.indexOf(el));
                })

                saveIndex = allIndex;

                mainItem.innerHTML = rightItem.innerHTML;

                
            leftItem.innerHTML = '';
            rightItem.innerHTML = '';
            arr = newArr;
            createSideItem();
            }
            leftItem.innerHTML = saveCard;
        }

        
        if (countClickRight > 0 && countClickLeft === 1 && AnimationEvent.animationName === 'move-to-left') {
            slider.classList.remove('transition-to-left');
            leftItem.innerHTML = saveCard;
            mainItem.innerHTML = leftItem.innerHTML;

            leftItem.innerHTML = '';
            rightItem.innerHTML = '';
            arr = saveIndex;
            createSideItem();

            countClickRight = 0;
            countClickLeft = 0;
            saveCard = '';
        }

        if (countClickRight > 0 && countClickLeft > 1 && AnimationEvent.animationName === 'move-to-left') {
            slider.classList.remove('transition-to-left');

            mainItem.innerHTML = leftItem.innerHTML;
            leftItem.innerHTML = '';
            rightItem.innerHTML = '';
            arr = newArr;
            createSideItem();
            countClickRight = 0;
            countClickLeft = 0;
        }    

        btnLeft.addEventListener('click', moveLeft)
        btnRight.addEventListener('click', moveRight)
    })
}



// слайдер конец
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// пагинация начало
const petCardContainer = document.querySelector('.pets_our-friend_cards-wrapper');
const paginationLastPageLeft = document.querySelector('#pagination_last-page_left');
const paginationPreviousPage = document.querySelector('#pagination_previous-page');
const paginationCurrentPage = document.querySelector('#pagination_current-page');
const paginationNextPage = document.querySelector('#pagination_next-page');
const paginationLastPageRight = document.querySelector('#pagination_last-page_right');

let countClickNextPage = 1;
let lastPage;

if (petCardContainer !== null) {
    
function generateNumberFromZeroToSeven () {
    let arr = [];
      while(arr.length <= 7) {
      let indexForItems = Math.round(Math.random() * 7);
        if(!arr.includes(indexForItems)) {
            arr.push(indexForItems);
        }
    }
  return arr;
}


function generateTwentyFourItems() {
    let firstArray, secondArray, thirdArray
    let isSecondArrayHasDuplicatesFromFirst, isSecondArrayHasDuplicatesFromThird

    do {
        firstArray = generateNumberFromZeroToSeven();
        secondArray = generateNumberFromZeroToSeven();
        thirdArray = generateNumberFromZeroToSeven();

        const lastTwoElementsOfFirstArray = firstArray.slice(-2);
        const firstTwoElementsOfThirdArray = thirdArray.slice(0, 2);
        const firstHalfOfSecondArray = secondArray.slice(0, 4)
        const secondHalfOfSecondArray = secondArray.slice(-4)

        isSecondArrayHasDuplicatesFromFirst = !lastTwoElementsOfFirstArray.every((element) => firstHalfOfSecondArray.every((item) => item !== element))
        isSecondArrayHasDuplicatesFromThird = !firstTwoElementsOfThirdArray.every((element) => secondHalfOfSecondArray.every((item) => item !== element))
    } while(isSecondArrayHasDuplicatesFromFirst || isSecondArrayHasDuplicatesFromThird)  

  return [...firstArray, ...secondArray, ...thirdArray];
}

const resaltArrayAllCards = [...generateTwentyFourItems(), ...generateTwentyFourItems()];


let randomObjectsArray;

function getWidth () {
    if (window.innerWidth > 0 && window.innerWidth <= 650) {
        randomObjectsArray = getNumberPages(3, 16)
        lastPage = 16;
    } else if (window.innerWidth > 650 && window.innerWidth <= 768) {
        randomObjectsArray = getNumberPages(6, 8)
        lastPage = 8;
    } else if (window.innerWidth > 768) {
        randomObjectsArray = getNumberPages(8, 6)
        lastPage = 6;
    }
}

getWidth ();

window.addEventListener('resize',(e) => {
    const width= document.body.clientWidth;
    body.value = width;  
    
    if (body.value > 0 && body.value <= 650) {
        randomObjectsArray = getNumberPages(3, 16)
        petCardContainer.innerHTML = '';
        lastPage = 16;
        getIndexForPetCard();
    } else if (body.value > 650 && body.value <= 768) {
        randomObjectsArray = getNumberPages(6, 8);
        petCardContainer.innerHTML = '';
        lastPage = 8;
        getIndexForPetCard();
    } else if (body.value > 768) {
        randomObjectsArray = getNumberPages(8, 6);
        petCardContainer.innerHTML = '';
        lastPage = 6;
        getIndexForPetCard();
    }

    if (countClickNextPage > 8 && lastPage <= 16 && body.value > 650 && body.value <= 768) {
        countClickNextPage = 1;
        randomObjectsArray = getNumberPages(6, 8);
        lastPage = 8;
        getIndexForPetCard();
    } else if (countClickNextPage > 6 && lastPage <= 8 && body.value > 768) {
        countClickNextPage = 1;
        randomObjectsArray = getNumberPages(8, 6);
        petCardContainer.innerHTML = '';
        lastPage = 6;
        getIndexForPetCard();
    }
})
// сверху перемешиваем массис

// ниже создаем карточки начало
function createPetsCard (index) {
    if(petCardContainer !== null) {

        let wrapperCard = document.createElement('div');
        wrapperCard.classList.add('pets_our-friend_card')

        let cardImg = document.createElement('img');
        cardImg.src = animalInformation[index].img;
        cardImg.classList.add('our-friend_animals-image');

        let wrapperInfo = document.createElement('div');
        wrapperInfo.classList.add('our-friend_card-info');

        let cardName = document.createElement('span');
        cardName.classList.add('our-friend_card-text');
        cardName.innerText = animalInformation[index].name;

        let cardBtn = document.createElement('button');
        cardBtn.classList.add('our-friend_card-button');
        cardBtn.classList.add('btn');
        cardBtn.innerText = 'Lean more';

        petCardContainer.append(wrapperCard);
        wrapperCard.append(cardImg, wrapperInfo);
        wrapperInfo.append(cardName, cardBtn);
    }

    let petCards = document.querySelectorAll('.pets_our-friend_card');

    petCards.forEach(el => {
        el.addEventListener('click', createPopUp);
    })
}

function getNumberPages (num, page) {
    let defaultArray = [];

    for (let i = 0; i < resaltArrayAllCards.length; i++) {
        defaultArray.push(resaltArrayAllCards[i])
    }

    let arrAllrandomObjectsArray = [];

    for(let i = 0; i < page; i++) {
        arrAllrandomObjectsArray.push(defaultArray.splice(0, num))
    }

    return arrAllrandomObjectsArray;
}

function getIndexForPetCard (e) {
    if (e !== undefined) {

        if (e.target.id === 'pagination_next-page') {
            petCardContainer.innerHTML = '';
            countClickNextPage++;
        }

        if (e.target.id === 'pagination_previous-page') {
            petCardContainer.innerHTML = '';
            countClickNextPage--;
        }

        if (e.target.id === 'pagination_last-page_right') {
            petCardContainer.innerHTML = '';
            countClickNextPage = lastPage;
        }

        if (e.target.id === 'pagination_last-page_left') {
            petCardContainer.innerHTML = '';
            countClickNextPage = 1;
        }
    }
    // {
    if(countClickNextPage >= 1 && countClickNextPage <=lastPage) {
        paginationCurrentPage.innerText = countClickNextPage;

        randomObjectsArray[countClickNextPage-1].forEach(el => {
            createPetsCard(el);
        })
    }

    if(countClickNextPage > 1 && countClickNextPage < lastPage) {
        paginationLastPageLeft.style.color = 'black';
        paginationPreviousPage.style.color = 'black';
        paginationLastPageLeft.style.borderColor = '#F1CDB3';
        paginationPreviousPage.style.borderColor = '#F1CDB3';
        paginationLastPageLeft.classList.add('hoverBtn');
        paginationPreviousPage.classList.add('hoverBtn');


        paginationLastPageRight.style.color = 'black';
        paginationNextPage.style.color = 'black';
        paginationLastPageRight.style.borderColor = '#F1CDB3';
        paginationNextPage.style.borderColor = '#F1CDB3';
        paginationLastPageRight.classList.add('hoverBtn');
        paginationNextPage.classList.add('hoverBtn');
        

        paginationLastPageRight.style.cursor = 'pointer';
        paginationNextPage.style.cursor = 'pointer';

        paginationLastPageLeft.style.cursor = 'pointer';
        paginationPreviousPage.style.cursor = 'pointer';

        paginationLastPageRight.addEventListener('click', getIndexForPetCard)
        paginationLastPageLeft.addEventListener('click', getIndexForPetCard)

        paginationPreviousPage.addEventListener('click', getIndexForPetCard)
        paginationNextPage.addEventListener('click', getIndexForPetCard)
    }

    if (countClickNextPage === lastPage) {

        paginationLastPageLeft.addEventListener('click', getIndexForPetCard)
        paginationPreviousPage.addEventListener('click', getIndexForPetCard)
        
        paginationNextPage.removeEventListener('click', getIndexForPetCard);
        paginationLastPageRight.removeEventListener('click', getIndexForPetCard)
        paginationNextPage.classList.add('pets_unactive-button');
        paginationNextPage.style.borderColor = '#CDCDCD';
        paginationNextPage.style.color = '#CDCDCD';
        paginationLastPageRight.classList.add('pets_unactive-button');
        paginationLastPageRight.style.borderColor = '#CDCDCD';
        paginationLastPageRight.style.color = '#CDCDCD';
        paginationLastPageRight.style.cursor = 'no-drop';
        paginationNextPage.style.cursor = 'no-drop';

        paginationLastPageLeft.style.color = 'black';
        paginationPreviousPage.style.color = 'black';
        paginationLastPageLeft.style.borderColor = '#F1CDB3';
        paginationPreviousPage.style.borderColor = '#F1CDB3';
        paginationLastPageLeft.classList.add('hoverBtn');
        paginationPreviousPage.classList.add('hoverBtn');

        paginationLastPageLeft.style.cursor = 'pointer';
        paginationPreviousPage.style.cursor = 'pointer';

        paginationLastPageRight.classList.remove('hoverBtn');
        paginationNextPage.classList.remove('hoverBtn');

    }

    if (countClickNextPage === 1) {
        paginationPreviousPage.removeEventListener('click', getIndexForPetCard)
        paginationLastPageLeft.removeEventListener('click', getIndexForPetCard)

        paginationNextPage.addEventListener('click', getIndexForPetCard)
        paginationLastPageRight.addEventListener('click', getIndexForPetCard)
        
        paginationLastPageLeft.style.color = '#CDCDCD';
        paginationPreviousPage.style.color = '#CDCDCD';
        paginationLastPageLeft.style.borderColor = '#CDCDCD';
        paginationPreviousPage.style.borderColor = '#CDCDCD';

        paginationLastPageLeft.style.cursor = 'no-drop';
        paginationPreviousPage.style.cursor = 'no-drop';

        paginationLastPageLeft.classList.remove('hoverBtn');
        paginationPreviousPage.classList.remove('hoverBtn');

        paginationLastPageRight.style.color = 'black';
        paginationNextPage.style.color = 'black';
        paginationLastPageRight.style.borderColor = '#F1CDB3';
        paginationNextPage.style.borderColor = '#F1CDB3';
        paginationLastPageRight.classList.add('hoverBtn');
        paginationNextPage.classList.add('hoverBtn');
        paginationLastPageRight.style.cursor = 'pointer';
        paginationNextPage.style.cursor = 'pointer';
    }
}

getIndexForPetCard();

paginationPreviousPage.addEventListener('click', getIndexForPetCard)
paginationNextPage.addEventListener('click', getIndexForPetCard)

paginationLastPageLeft.addEventListener('click', getIndexForPetCard)
paginationLastPageRight.addEventListener('click', getIndexForPetCard)

// ниже создаем карточки конец
}

// пагинация конец
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// попап на обеих страницах старт

function createPopUp (e) {
    if (e.target.nodeName === 'IMG') {
        getPetsInfo(e.srcElement.nextElementSibling.children[0].innerText);
        return;
    }

    if (e.target.nodeName === 'SPAN') {
        getPetsInfo(e.target.innerText);
        return;
    }

    if (e.target.nodeName === 'BUTTON') {
        getPetsInfo(e.srcElement.nextSibling.parentElement.children[0].innerText);
        return;
    }

    if (e.target.nodeName === 'DIV') {
        getPetsInfo(e.target.children[0].innerText);
        return;
    }
}

// popUp elements
const popUpKeyContainer = document.querySelector('.pop-up_key-container');
const popUpButton = document.querySelector('.pop-up_button');

const popUpImg = document.querySelector('.pop-up_img');
const popUpTitle = document.querySelector('.pop-up_content_title');
const popUpSubitle = document.querySelector('.pop-up_content_subtitle');
const popUpPetDescription = document.querySelector('.pop-up_content_pet-description');

const popUpPetAge = document.querySelector('.pop-up_pet-age');
const popUpPetInoculations = document.querySelector('.pop-up_pet-inoculations');
const popUpPetDiseases = document.querySelector('.pop-up_pet-diseases');
const popUpPetParasites = document.querySelector('.pop-up_pet-parasites');
// popUp elements

async function getPetsInfo (petName) {
    const responce = await fetch('assets/pets-info/data.json');

    const petsData = await responce.json();

    petsData.forEach(el => {
        if (el.name === petName) {
            popUpImg.src = el.img;
            popUpTitle.innerText = el.name;
            popUpSubitle.innerText = `${el.type} - ${el.breed}`;
            popUpPetDescription.innerText = el.description;
            popUpPetAge.innerText = el.age;
            popUpPetInoculations.innerText = el.inoculations;
            popUpPetDiseases.innerText = el.diseases;
            popUpPetParasites.innerText = el.parasites;
            body.classList.add('body_unactive');
            popUpKeyContainer.style.display = 'flex';

            if (startScreen !== null) {
                startScreen.classList.add('dark-background');
            }

            if (aboutSection !== null) {
                aboutSection.classList.add('gray-background');
            }

            if (helpSection !== null) {
                helpSection.classList.add('gray-background');
            }

            if (petsHeader !== null) {
                petsHeader.classList.add('gray-background');
                petsHeader.classList.add('dark-background');
            }

            header.classList.add('dark-background');
            header.classList.add('transparent-background');
            main.classList.add('dark-background');
            footer.classList.add('dark-background');
        }
    })
}

function closePopUp (e) {
    if (e.target.className === 'pop-up_key-container' || e.target.className === 'pop-up_button-img' || e.target.className === 'pop-up_button') {
        body.classList.remove('body_unactive');
        popUpKeyContainer.style.display = 'none';

        if (startScreen !== null) {
            startScreen.classList.remove('dark-background');
        }

        if (aboutSection !== null) {
            aboutSection.classList.remove('gray-background');
        }

        if (helpSection !== null) {
            helpSection.classList.remove('gray-background');
        }

        if (petsHeader !== null) {
            petsHeader.classList.remove('gray-background');
            petsHeader.classList.remove('dark-background');
        }
        
        header.classList.remove('dark-background');
        header.classList.remove('transparent-background');
        main.classList.remove('dark-background');
        footer.classList.remove('dark-background');
    }
}

popUpButton.addEventListener('click', closePopUp);
popUpKeyContainer.addEventListener('click', closePopUp);