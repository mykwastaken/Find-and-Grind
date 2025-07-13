function showImageCalculator() {
  document.querySelector('.calculator').style.display = 'flex';
  document.getElementById('numberCalculator').style.display = 'none';
}
// Função para mostrar a segunda calculadora com números
function saveAndShowNumbers(imageSrc) {
  // Oculta a primeira calculadora com imagens
  document.querySelector('.calculator').style.display = 'none';

  // Exibe a segunda calculadora com números
  document.getElementById('numberCalculator').style.display = 'block';
}

// Funções para a segunda calculadora com números
function addToDisplay(number) {
  document.getElementById('numberDisplay').value += number;
}

function clearNumberDisplay() {
  document.getElementById('numberDisplay').value = '';
}

let selectedImageSrc = '';

function selectImage(button, imageSrc) {
  // Remove a seleção de outras imagens
  const buttons = document.querySelectorAll('.calculator button');
  buttons.forEach(btn => btn.classList.remove('selected'));

  // Seleciona a imagem clicada
  button.classList.add('selected');
  selectedImageSrc = imageSrc;
}

function showImageCalculator() {
  document.querySelector('.calculator').style.display = 'flex';
  document.getElementById('numberCalculator').style.display = 'none';
}

// Funções para a segunda calculadora com números
// ... (suas funções existentes para manipulação dos números)

function saveAndShowNumbers() {
  if (selectedImageSrc) {
    document.querySelector('.calculator').style.display = 'none';
    document.getElementById('numberCalculator').style.display = 'block';
    // Limpe a seleção após salvar
    selectedImageSrc = '';
    const buttons = document.querySelectorAll('.calculator button');
    buttons.forEach(btn => btn.classList.remove('selected'));
  } else {
    alert('Por favor, selecione uma imagem antes de avançar.');
  }
}

function calculate() {
  let currentDisplay = document.getElementById('numberDisplay').value;
  let result = eval(currentDisplay); // Avalia a expressão
  document.getElementById('resultDisplay').value = result + "Reps" ;
  document.getElementById('resultDisplay').value = result + " Kcals";
}


function addToDisplay(value) {
  if (value === '+' || value === '=') {
      let currentDisplay = document.getElementById('numberDisplay').value;
      if (currentDisplay.slice(-1) === '+' || currentDisplay.slice(-1) === '=') {
          // Se o último caractere for um operador, substitua pelo novo
          currentDisplay = currentDisplay.slice(0, -1) + value;
      } else {
          currentDisplay += value;
      }
      document.getElementById('numberDisplay').value = currentDisplay;
  } else {
      let currentNumber = document.getElementById('numberDisplay').value;
      if (currentNumber === '0') {
          // Se o visor mostrar apenas zero, substitua pelo novo número
          document.getElementById('numberDisplay').value = value;
      } else {
          document.getElementById('numberDisplay').value += value;
      }
  }
}

function clearNumberDisplay() {
  document.getElementById('numberDisplay').value = '';
  document.getElementById('resultDisplay').value = '';
}

function showImageCalculator() {
  document.querySelector('.calculator').style.display = 'flex';
  document.getElementById('numberCalculator').style.display = 'none';
}





