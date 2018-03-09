function HandleClickInput(event, add, inputElement) {
  console.log('if this works, then this is fucking awesome');
  if (inputElement.style.display === 'none') {
    inputElement.style.display = 'block';
    inputElement.focus();
  } else if (inputElement.style.display === 'block' && event.target[0].value.trim() !== '') {
    const name = event.target[0].value;
    add(name);
    event.target[0].value = '';
    inputElement.style.display = 'none';
  } else {
    inputElement.style.display = 'none';
  }
}

export default HandleClickInput;
