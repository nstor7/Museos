import yo from 'yo-yo'
import header from '../header'

var nav = yo`
<nav>
 <ul>
  <li><a href="#">Registrate</a></li>
  <li><a href="#">pedazo</a></li>
  <li><a href="#">deloco</a></li>
 <a href="">
  <i class="fa fa-bars" aria-hidden="true"></i>
 </a>
 
 </ul>
</nav>
`
module.exports = header(nav)