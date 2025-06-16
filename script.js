const sprite = document.getElementById('sprite');
const prompt = document.getElementById('prompt');

const stages = [
  { width: '80%', text: 'Tá você até que é corajosa, mas não clique de novo (eu que mando aqui mesmo)' },
  { width: '85%', text: 'Olha, tá bom já viu, não tô pra brincadeira mais (me obedeça)' },
  { width: '90%', text: 'Paro' },
  { width: '95%', text: 'Tá de sacanagem' },
  { width: '100%', text: 'Não clique em mim, peble' },
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
      <p class="final-message">LAYSLAAAAAAA</p>
      <p>Feliz aniversárioooo, que Deus te abençoe muito pra todo sempre, muitos anos de vida porque eu tenho muito a conversar contigo e não ouse a parar viu, passar meu tempo com você é sempre muito bom então não mude esse seu lado muito divertido que é inegável que tem, um beijão e aproveita seu diaaaa</p>
    `;
  }
});
