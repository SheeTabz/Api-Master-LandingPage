const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById('shorten').value
    fetch(`https://api.shrtco.de/v2/shorten?url=${input}`,{
    method: 'GET',})
.then(response => response.json())
.then(data => {
    const div = document.querySelector(".res")
    const result= document.createElement('div')
    result.className = 'result'
    result.innerHTML =`<label for=""> <a href="${input}"  target="_blank">${input}</a></label>
    <div class="resLeft">
    <label for="" class="short">  <a href="${data.result.full_short_link}"  target="_blank">${data.result.full_short_link}</a> </label>
    <button class="copy" onClick="copy()">Copy</button>
  </div>`
  div.appendChild(result)
console.log(data.result)


})

form.reset()
   

})

function copy() {
  // alert("copied")
   const text = document.querySelector(".short a").innerText
   let inputElement = document.createElement("input")
   inputElement.setAttribute("value", text)
  document.body.appendChild(inputElement)
  inputElement.select()
   document.execCommand("copy")
   inputElement.parentNode.removeChild(inputElement)
   console.log(text)
}

