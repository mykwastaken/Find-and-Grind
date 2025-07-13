var total_reps=0
var total_cals=0

const rewards = [
  { id: 'reward1', exercise: 'Shoulder Press', repsThreshold: 50, image: 'img/halterawardbw.png' },
  { id: 'reward7', exercise: 'Leg Press', repsThreshold: 50, image: 'img/halterawardbw.png' },
  { id: 'reward8', exercise: 'Sit-Up Bench', repsThreshold: 50, image: 'img/halterawardbw.png' },
  { id: 'reward4', exercise: 'Chest Press', repsThreshold: 50, image: 'img/halterawardbw.png' },
  { id: 'reward5', exercise: 'Push-Up Bars', repsThreshold: 50, image: 'img/halterawardbw.png' },
  { id: 'reward3', exercise: 'Free Runner', repsThreshold: 50, image: 'img/halterawardbw.png' },
  { id: 'reward6', exercise: 'Horizontal Row', repsThreshold: 50, image: 'img/halterawardbw.png' },
  { id: 'reward2', exercise: 'Cross Trainer', repsThreshold: 50, image: 'img/halterawardbw.png' }
];

document.addEventListener('DOMContentLoaded', () => {

  fetch('http://localhost:3000/workouts')
      .then(response => response.json())
      .then(data => {
        const id=sessionStorage.getItem('username')
        data.forEach(item => {
          if (id == item['username']) {
            total_reps += item['reps']
          }
          });
          const awardlevel = Math.floor(total_reps/50)
          for(let i = 1; i <= awardlevel; i++) {
            document.getElementById(`reward${i}`).src = rewards[0]['image'].replace('bw', '');
          }
      }
      

        );

  fetch('http://localhost:3000/cals')
        .then(response => response.json())
        .then(data => {
          const id=sessionStorage.getItem('username')
          data.forEach(item => {
            if (id == item['username']) {
              total_cals += item['cals']
            }
            });
            if(total_cals<=400) {
              const awardlevel = Math.floor(total_cals/100)
              for(let i = 1; i <= awardlevel; i++) {
                document.getElementById(`fire${i}`).src = document.getElementById(`fire${i}`).src.replace('bw', '');
              }
            }
            if(total_cals>=1000) {
              const awardlevel = Math.floor(total_cals/500)-1
              for(let i = 1; i <= 4+awardlevel; i++) {
                document.getElementById(`fire${i}`).src = document.getElementById(`fire${i}`).src.replace('bw', '');
              }
            }
        }
        
  
          );
        
  });


var isFirstLoad = true;

function showCategory(categoryId) {
    var selectedCategory = document.getElementById(categoryId);
    var currentVisibleCategory = document.querySelector('.containermetas[style="display: block;"]');

    if (currentVisibleCategory === null && isFirstLoad) {
        isFirstLoad = false;
        document.getElementById(categoryId).style.display = 'block'; // Exibe a Categoria 1 por padrão
    } else if (currentVisibleCategory !== selectedCategory) {
        currentVisibleCategory.style.display = 'none';
        selectedCategory.style.display = 'block';
    }
  };