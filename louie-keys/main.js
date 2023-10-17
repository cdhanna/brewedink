var codeMain = document.getElementById('code');


function getQueryParameter(parameterName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameterName);
  }
  
  // Example usage:
  const codeValue = getQueryParameter('code');
  if (codeValue) {
    console.log('The "code" parameter value is: ' + codeValue);
    codeMain.innerHTML = codeValue;
  } else {
    console.log('The "code" parameter is not present in the URL.');
    console.log('the Url does not contain a valid code')
  }