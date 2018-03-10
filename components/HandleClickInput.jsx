function HandleClickInput(event, add, inputElement) {
  if (inputElement.style.display === 'none') {
    inputElement.style.display = 'inline';
    inputElement.focus();
  } else if (inputElement.style.display === 'inline' && event.target[0].value.trim() !== '') {
    add(event);
    event.target[0].value = '';
    inputElement.style.display = 'none';
  } else {
    inputElement.style.display = 'none';
  }
}

export default HandleClickInput;
