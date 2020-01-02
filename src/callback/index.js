// Ejemplo simple de Callback
function date(callback) {
  console.log(new Date);
  
  setTimeout(() => {
    let date = new Date;

    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);