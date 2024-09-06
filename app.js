function pesquisar() {
  let campoPesquisa = document.getElementById('campo-pesquisa').value
  if (!campoPesquisa) {
    document.getElementById('resultados-pesquisa').innerHTML = `
    <div class="item-resultado">
    <p>Nada foi encontrado. Informe um tipo de cerveja ou a harmonização desejada.</p>
    <div>
    `
    return
  }
  let resultado = ""
  for (let cerveja of cervejas) {
    if (
      cerveja.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || cerveja.descricao.toLowerCase().includes(campoPesquisa.toLowerCase()) ||
      cerveja?.tags?.toLowerCase().includes(campoPesquisa?.toLowerCase())
    ) {
      resultado += `
        <div class="item-resultado">
          <h2>
            ${cerveja.titulo}
          </h2>
          <p class="descricao-meta">${cerveja.descricao}</p>
          <h3>
            <a href="#">Harmonizações</a>
          </h3>
          <ul>
            <li><strong>Carnes:</strong> ${cerveja.harmonizacoes.carnes}</li>
            <li><strong>Queijos:</strong> ${cerveja.harmonizacoes.queijos}</li>
            <li><strong>Sobremesas:</strong> ${cerveja.harmonizacoes.sobremesas}</li>
            <li><strong>Cozinhas tradicionais:</strong>  ${cerveja.harmonizacoes.cozinhasTradicionais}</li>
          </ul>
          <a href=${cerveja.link} target="_blank">Saiba mais</a>
        </div>
    `
    }
  }
  if (!resultado) {
    resultado = `
      <div class="item-resultado">
        <p>Nada foi encontrado</p>
      <div>
  `
  }

  document.getElementById('resultados-pesquisa').innerHTML = resultado
}
