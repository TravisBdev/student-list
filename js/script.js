/*
Author: Travis Brown
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


let itemsPerPage = 9;

const showPage = function(list, page){
    let startIndex = page * itemsPerPage - itemsPerPage;
    let endIndex = page * itemsPerPage;
    let studentList = document.querySelector('.student-list');
    studentList.innerHTML = '';
    for(let i = 0; i < list.length; i++){
        if(i >= startIndex && i < endIndex){
            let studentItem = `
            <li class="student-item cf">
                <div class="student-details">
                    <img class='avatar' src='${list[i].picture.thumbnail}' alt='profile picture'>
                    <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
                    <span class='date'> ${list[i].registered.date}</span>
                </div>
            </li>`;
            studentList.insertAdjacentHTML("beforeend", studentItem);

        }
    }
    
}



const addPagination = function(list){
    let numOfPages = Math.ceil(list.length / itemsPerPage);
    let linkList = document.querySelector('.link-list');
    linkList.innerHTML = '';
    for(let i = 1; i < numOfPages; i++){
        let button = `
            <li>
                <button type='button'>${i}</button>
            </li>`;
        linkList.insertAdjacentHTML('beforeend', button);
    }

    let firstButton = linkList.querySelector("button");
    firstButton.className = "active";
    linkList.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON'){
            let btnActive = document.querySelector('.active');
            btnActive.className = '';
            e.target.className = 'active';
            showPage(list, e.target.textContent);
        }
    })
}





// Call functions
showPage(data, 1);
addPagination(data);
