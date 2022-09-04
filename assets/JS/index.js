
  
const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById('shorten').value
    fetch(`https://api.shrtco.de/v2/shorten?url=${input}`,{
    method: 'GET',})
.then(response => response.json())
.then(data => console.log(data.result.full_short_link))

   

})

