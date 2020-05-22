function clockFunction() {
  let clock = new Date();

  let hour = clock.getHours();
  let minute = clock.getMinutes();
  let second = clock.getSeconds();

  hour = addZero(hour);
  minute = addZero(minute);
  second = addZero(second);

  const hourContainer = document.querySelector('.clock__hour');
  const minuteContainer = document.querySelector('.clock__minute');
  const secondContainer = document.querySelector('.clock__second');

  hourContainer.innerText = hour.toString(10);
  minuteContainer.innerText = minute.toString(10);
  secondContainer.innerText = second.toString(10);

  let t = setTimeout(clockFunction, 500);
}

// console.log(typeof hour);

function addZero(i) {
  if (i < 10) i = '0' + i;
  return i;
}
