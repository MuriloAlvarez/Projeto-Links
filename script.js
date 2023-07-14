function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains ('light')) {
  //html.classList.remove ('light')
  //} else { html.classList.add ('light')}
  // }

  // pegar a tag da img
  const img = document.querySelector("#profile img")
  // substituir img
  if (html.classList.contains("light")) {
    // se tiver light mode, add a img com light mode
    img.setAttribute("src", "./assets/Foto-MuriloProfile.png")
  } else {
    // se tiver sem light mode, manter imagem
    img.setAttribute("src", "./assets/Foto-AngelicaProfile.png")
  }
}
