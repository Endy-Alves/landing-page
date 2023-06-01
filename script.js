function toggleHiddenText() {
    var hiddenText = document.querySelector('.texto-grande-display-none');
    var button = document.querySelector('.read-more-button');
  
    if (hiddenText.style.display === 'none') {
      hiddenText.style.display = 'inline';
      button.textContent = 'Leia Menos';
    } else {
      hiddenText.style.display = 'none';
      button.textContent = 'Leia Mais';
    }
  }
  