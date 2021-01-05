const main = document.getElementById('main')
const cardHTML = `
<!-- Banner topo -->
<!-- <p class="center"><a href="https://www.google.com/search?&q=covid+19" target="_blank"><img class="responsive-img" src="images/mensagem.svg"></a></p> -->
<h1 class="center" style="color:#67b978;">Qual é meu IP?&nbsp;&nbsp;<a style="color:#67b978;" onclick="darkMode()"
    title="Modo escuro" href="#"><i class="material-icons">brightness_4</i></a></h1>
<p class="center">Descubra seu IP externo.</p>
<h3 class="center" id="ip" style="color:#67b978;"></h3>
<footer class="center">
    <p>Compartilhe:</p>
    <div>
      <p class="center">
        <a style="color:#3b5998;" href="https://www.facebook.com/sharer.php?u=https://jeanrafaellourenco.github.io/meu_ip/"
          target="_blank"><i class=" fa fa-facebook"></i> Facebook</a>

        &nbsp;&nbsp;
        <a style="color:#34af23;" href="https://api.whatsapp.com/send?text=https://jeanrafaellourenco.github.io/meu_ip/"
          target="_blank"><i class="fa fa-whatsapp"></i> WhatsApp</a>

        &nbsp;&nbsp;
        <a style="color:#00acee;" href="https://twitter.com/share?url=https://jeanrafaellourenco.github.io/meu_ip/"
          target="_blank"><i class="fa fa-twitter"></i> Twitter</a>

        &nbsp;&nbsp;
        <a style="color:#87ceeb;" href="https://t.me/share/url?url=https://jeanrafaellourenco.github.io/meu_ip/"
          target="_blank"><i class="fa fa-telegram"></i> Telegram</a>
      </p>
    </div>
    <!-- Banner rodapé -->
    <a href="https://www.google.com/search?&q=covid+19" target="_blank"><img class="responsive-img" src="images/mensagem.svg"></a>
    <h6 id="data"></h6>
    <script>document.getElementById("data").innerHTML = new Date();</script>
  </footer>
    `
main.innerHTML = cardHTML

function json(url) {
  return fetch(url).then(res => res.json());
}

json(`https://ifconfig.me/all.json`).then(data => {
  document.getElementById("ip").innerHTML = 'Meu IP é: ' + data.ip_addr;
});

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function refreshPage() {
    window.location.reload();
}
