const go = document.querySelector('.button');




function shuffle() {
  const container = document.querySelector('.container');
  const button1 = document.querySelector('.button1');
  const players = document.querySelector('#count');
  const doctor = document.querySelector('#doctor');
  
  let array = ['Доктор', 'Дон Мафии', 'Мафия', 'Мафия', 'Мафия'];
  array.length = players.value;
  
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) array[i] = 'Мирный';
  }

  if (!doctor.checked) array[0] = 'Мирный';
  array.sort(() => Math.random() - 0.5);
  console.log(array, array.length);

  container.remove();
  button1.remove();

  const list = document.createElement('OL');

  for (let i = 0; i < array.length; i++) {
    const element = document.createElement('LI');
    element.innerHTML = array[i];
    list.appendChild(element);    
  }

  list.classList.add('container');
  list.style.marginTop = 50 + 'px';
  document.body.prepend(list);

}

go.onclick = shuffle;
