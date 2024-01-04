function clearDivContent(divId) {
    var divElement = document.getElementById(divId);
    if (divElement) {
      divElement.innerHTML = '';
    }
}
  
function pathFormat(path, state, format) {
  var formattedPath = `./${path}/${format.replace('#', state)}`;
  return formattedPath;
}