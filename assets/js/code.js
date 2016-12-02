const devMode = true;
const serverUrl = devMode ? 'http://localhost:3000' : 'http://ec2-54-201-137-29.us-west-2.compute.amazonaws.com:8080';

$(document).foundation();
// const myLocalStorage = {
//   set(item, value) {
//     localStorage.setItem(item, JSON.stringify(value));
//   },
//   get(item) {
//     return JSON.parse(localStorage.getItem(item));
//   },
//   remove(item) {
//     localStorage.removeItem(item);
//   },
// };

function httpReqHelper(path, params, method) {
  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.
  const form = document.createElement('form');
  form.setAttribute('method', method || 'post');
  form.setAttribute('action', path);

  for(const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', params[key]);

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}

function clicked() {
  // myLocalStorage.set('phoLocation', $('#phoLocation').val());
  // $.get(serverUrl + '/search', {location:$('#phoLocation').val()},
  // function(result){console.log(result)});
  httpReqHelper(`${serverUrl}/search`, {
    location: $('#phoLocation').val()
  }, 'get');
}
