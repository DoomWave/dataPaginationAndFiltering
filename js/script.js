/*
Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const itemsPerPage = 9;

function showPage(list, page) {
  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = page * itemsPerPage;
  const studentList = document.getElementsByClassName('student-list', );
  
  studentList.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    //Write a conditional statement that checks if the current index (i) is greater than or equal to the start index variable and less than the end index variable.
    console.log(list[i].name);
    if (i >= startIndex && i < endIndex) {
      let studentItem = `
      <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
          <h3>${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${list[i].registered.date}</span>
        </div>
      </li>
      `;
      studentList.insertAdjacentHTML("beforeend", studentItem);
     

    }
    

  }
}
showPage(data, 39)


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/




// Call functions
