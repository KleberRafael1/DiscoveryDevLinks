function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Atualizar a imagem do perfil conforme o modo
  updateProfileImage()

  // Salvar preferência no localStorage
  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }
}

function updateProfileImage() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

// Configurar o tema ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme")

  if (theme === "light") {
    document.documentElement.classList.add("light")
  } else {
    document.documentElement.classList.remove("light")
  }

  // Atualizar a imagem ao iniciar
  updateProfileImage()
})
