const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Wow!');
    } else {
      reject('Oops!')
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.error(error));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        resolve('True!');
      }, 2000);
    } else {
      const error = new Error('Oops!');
      
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(error => console.error(error));

// Ejecutar ambas promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Result:', response);
  })
  .catch(error => {
    console.error(error);
  });