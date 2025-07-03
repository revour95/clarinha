const sprite = document.getElementById('sprite');
const prompt = document.getElementById('prompt');

const stages = [
  { width: '80%', text: 'Tá você até que é corajosa, mas não clique de novo' },
  { width: '85%', text: 'Olha, tá bom já, não tô pra brincadeira mais' },
  { width: '90%', text: 'Paro' },
  { width: '95%', text: 'Tá de sacanagem' },
  { width: '100%', text: 'Não clique em mim pebleu' },
  { width: '100%', text: null }  // próximo é final
];

let current = 0;

sprite.addEventListener('click', () => {
  const stage = stages[current];

  if (stage.text) {
    // aumenta a largura do <img>, empurrando o <p> pra baixo
    sprite.style.width = stage.width;
    prompt.textContent = stage.text;
    current = Math.min(current + 1, stages.length - 1);
  } else {
    // tela final: substitui todo o conteúdo da .container
    document.querySelector('.container').innerHTML = `
      <img src="polar-bear.gif" alt="Polar Bear GIF" style="width: 70%; height: auto; margin-bottom: 0.5em;" />
      <p class="final-message">Clarinhaaaaaaa</p>
      <p>te amo S2</p>
    `;
  }
});
