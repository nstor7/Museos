import yo from 'yo-yo'

module.exports = function header(box){
  var el = yo`
<header class="nav-wrapper">
  <h1>museos</h1>
  ${box}
</header>`

return el
}

