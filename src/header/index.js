import yo from 'yo-yo'

module.exports = function header(box){
  var el = yo`
<header>
  <h1 class="hidden">PANAMARTE</h1>
  ${box}
</header>`

return el
}

