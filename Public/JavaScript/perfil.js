function createCounter() {
  let count = 0;

  return {
    decreaseCount() {
      if (count > 0) {
        count--;
        updateCounter();
      }
    },
    increaseCount() {
      count+=10;
      updateCounter();
    },
    getCount() {
      return count;
    }
  };
}

function updateCounter() {
  const countElements = document.querySelectorAll('span[id^="count"]');
  countElements.forEach((element, index) => {
    element.textContent = counters[index].getCount().toString();
  });
}

const counters = [];
const decreaseButtons = document.querySelectorAll('button[id^="decrease"]');
const increaseButtons = document.querySelectorAll('button[id^="increase"]');

for (let i = 0; i < decreaseButtons.length; i++) {
  const counter = createCounter();
  counters.push(counter);

  decreaseButtons[i].addEventListener('click', counter.decreaseCount);
  increaseButtons[i].addEventListener('click', counter.increaseCount);
}

updateCounter();

const logoutButton = document.getElementById('logoutBtn');

logoutButton.addEventListener('click', function () {
  console.log('Logout button clicked');
  fetch('http://localhost:3000/logout', {
    method: 'POST',
  })
    .then(response => {
      console.log('Response received');
      if (response.ok) {
        console.log('Logout successful!');
        sessionStorage.clear();
        window.location.href = 'index.html';
      } else {
        throw new Error('Logout failed');
      }
    })
    .catch(error => {
      console.log('Error:', error);
      alert('An error occurred during logout');
    });
});

const usernameElement = document.getElementById('username');
const genderElement = document.getElementById('gender');
const weightElement = document.getElementById('weight');
const heightElement = document.getElementById('height');
const ageElement = document.getElementById('age');
const userFullNameElement = document.getElementById('userFullName');

fetch('http://localhost:3000/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    userFullNameElement.textContent = sessionStorage.getItem('username');
    usernameElement.textContent = sessionStorage.getItem('username');
   // genderElement.textContent = sessionStorage.getItem;
    weightElement.textContent = userData.weight('weight');
    heightElement.textContent = userData.height('height');
    ageElement.textContent = userData.age('age');
  })
  .catch(error => {
    console.log('Error:', error);
  });

const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', function () {
  const reps=document.getElementById('count1').innerHTML
  const id=sessionStorage.getItem('username')
  fetch(`http://localhost:3000/workouts?id=${id}&reps=${reps}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.status === 200) {
        console.log('Workout submitted successfully!');
      } else {
        throw new Error('Workout submission failed');
      }
    })
    .catch(error => {
      console.log('Error:', error);
      alert('An error occurred during workout submission');
    });
});

const submitButton2 = document.getElementById('submitBtn2');
submitButton2.addEventListener('click', function () {
  const cals=document.getElementById('count2').innerHTML
  const id=sessionStorage.getItem('username')
  console.log(cals)
  console.log(id)
  fetch(`http://localhost:3000/cals?id=${id}&cals=${cals}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.status === 200) {
        console.log('Cals submitted successfully!');
      } else {
        throw new Error('Cals submission failed');
      }
    })
    .catch(error => {
      console.log('Error:', error);
      alert('An error occurred during cals submission');
    });
});

fetch('http://localhost:3000/workouts/reps')
  .then(response => response.json())
  .then(data => {
    const totalRepsTable = document.querySelector('.small-table');
    const rows = totalRepsTable.getElementsByTagName('tr');

    data.forEach(item => {
      const { exercise_name, total_reps } = item;

      for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells[0].textContent === exercise_name) {
          cells[1].textContent = total_reps;
          break;
        }
      }
    });
  })
  .catch(error => {
    console.error('Error fetching total reps:', error);
  });







  function loadCurrentWeek() {
    const startOf2024 = new Date('2024-01-01');
    renderWeek(startOf2024);
  }
  
  function loadNextWeek() {
    const currentWeekStartDate = new Date(document.getElementById('currentWeek').getAttribute('data-start-date'));
    const nextWeekStartDate = new Date(currentWeekStartDate);
    nextWeekStartDate.setDate(currentWeekStartDate.getDate() + 7);
    renderWeek(nextWeekStartDate);
  }
  
  function loadPreviousWeek() {
    const currentWeekStartDate = new Date(document.getElementById('currentWeek').getAttribute('data-start-date'));
    const previousWeekStartDate = new Date(currentWeekStartDate);
    previousWeekStartDate.setDate(currentWeekStartDate.getDate() - 7);
    renderWeek(previousWeekStartDate);
  }
  
  function renderWeek(startOfWeek) {
    const daysContainer = document.getElementById('calendarDays');
    daysContainer.innerHTML = '';
    
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startOfWeek);
      currentDate.setDate(startOfWeek.getDate() + i);
  
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.textContent = currentDate.getDate();
      
      // Aqui você pode adicionar lógica para buscar dados da base de dados e exibi-los no elemento
  
      daysContainer.appendChild(dayElement);
    }
  
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
  
    const formattedStart = formatDate(startOfWeek);
    const formattedEnd = formatDate(endOfWeek);
  
    document.getElementById('currentWeek').textContent = `Semana de ${formattedStart} a ${formattedEnd}`;
    document.getElementById('currentWeek').setAttribute('data-start-date', startOfWeek.toISOString());
  }
  
  function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  }






  



