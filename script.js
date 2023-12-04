function ToggleMode(){
  const html = document.documentElement

  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')

  }

   const img = document.querySelector('#profile img')


   if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/foto2.jpeg")
   } else {
    img.setAttribute(
      "src",
      "./assets/WhatsApp Image 2023-12-03 at 13.56.11.jpeg")
    
   }

}
