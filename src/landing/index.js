import page from 'page'
import yo from 'yo-yo'
import empty from 'empty-element'
import template from './template'
import header from '../nav'

page('/', header, function(ctx, next){ 
 var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})
