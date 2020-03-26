const baseUrl = 'http://localhost:3050';

export const getAllCars = () => {
   const url = `${baseUrl}/api/cars`;
   return (
      new Promise((resolve, reject) => {
         const client = new XMLHttpRequest();
         client.onload = (event) => resolve(JSON.parse(event.target.responseText));
         client.onerror = (event) => resolve(event.target.statusText);
         client.open('get', url);
         client.send();
      })
   );
}

export const getCarById = (id) => {
   const url = `${baseUrl}/api/cars/${id}`;
   return (
      new Promise((resolve, reject) => {
         const client = new XMLHttpRequest();
         client.onload = (event) => resolve(JSON.parse(event.target.responseText));
         client.onerror = (event) => resolve(event.target.statusText);
         client.open('get', url);
         client.send();
      })
   );
}

export const addCar = (car) => {
   const url = `${baseUrl}/api/cars`;
   const data = JSON.stringify(car);

   return new Promise((resolve, _) => {
      const client = new XMLHttpRequest();
      client.open('POST', url, true);
      client.setRequestHeader('Content-type','application/json; charset=utf-8');
      client.onload = (event) => resolve(JSON.parse(event.target.responseText));
      client.onerror = (event) => resolve(event.target.statusText);
      client.send(data);
  }); 
};