const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById('shorten').value
    fetch(`https://api.shrtco.de/v2/shorten?url=${input}`,{
    method: 'GET',})
.then(response => response.json())
.then(data => {

})

   

})

// console.log(data.result.full_short_link)
{/* <div class="result">
  <label for=""> <a href="">https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G</a>  </label>
  <div class="resLeft">
  <label for="" class="short">  <a href="">https://www.frontendmentor.io/challenges</a> </label>
  <button class="copy">Copy</button>
</div>
</div> */}