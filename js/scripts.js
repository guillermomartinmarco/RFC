function langChange(el) {
  document.body.setAttribute('lang', el.value);
}

function linkStyleChange(style) {
  switch (style.value) {
    case 'no-style':
      $('a:link').css('color', 'unset');
      $('a:link').css('text-decoration', 'none');
      break;
    case 'normal':
      $('a:link').css('color', 'Blue');
      $('a:link').css('text-decoration', 'underline');
      break;
    default:
      break;
  }

}