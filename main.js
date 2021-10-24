const socials = {
  github: 'diegobviana',
  linkedin: 'in/diegobgviana',
  youtube: 'channel/UCeBtOoNA_DDljva-cJpQo_g',
  facebook: 'diegobgviana',
  instagram: 'diegobgviana'
  //twitter: 'diegobviana' //nem tenho
  //spotify: 'diego'
}
function setSocials() {
  //Dessa forma da pra fazer para qualquer outra rede social que seja informada no objeto. Caso deseje adicionar outra rede social, basta colocar o arquivo do icone.svg na pasta images e adicionar a opção com o mesmo nome da imagem no objeto socials.
  for (let i = 0; i < Object.keys(socials).length; i++) {
    const element = Object.keys(socials)[i]
    const social = document.getElementById(element)

    if (social == undefined) {
      const list = document.getElementById('socialLinks')
      list.insertAdjacentHTML(
        'beforeend',
        `<li id='${element}'><a href="http://${element}.com/${socials[element]}" target="_blank"
        ><img src="images/${element}.svg" alt="Icone ${element}"
        /></a></li>`
      )
    } else {
      social.children[0].href = `http://${element}.com/${socials[element]}`
    }
  }
  //Do modo abaixo, apenas pega os itens que estão dentro da ul, ja deixando de fora o github ou qualquer outro fora da ul.
  /*
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://${social}.com/${socials[social]}`
  }
*/
}

setSocials()

function getInfoGithub() {
  const url = `https://api.github.com/users/${socials.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar_url
      userName.textContent = data.name
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}

getInfoGithub()
