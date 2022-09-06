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

// FUNCTION FOR COPYING TEXT TO CLIPBOARD
function copy() {
  // store the text to be copied in avariable
   const text = document.querySelector(".short a").innerText

   //create an input field to store the text to be copied
   let inputElement = document.createElement("input")

   //set its value to the text above
   inputElement.setAttribute("value", text)

   // append the input to the DOM
  document.body.appendChild(inputElement)

  // this method selects the value inside the input automatically
  inputElement.select()

  // this command copies the input value to clipboard
   document.execCommand("copy")

   // removes the newly formed input element from appearing to the DOM since t will affect the appearence
   inputElement.parentNode.removeChild(inputElement)

  const button = document.querySelector(".copy")
 
  button.innerText = "Copied!"
  button.style.borderColor = "hsl(257, 27%, 26%)"
  button.style.color = "hsl(257, 27%, 26%)"

}

