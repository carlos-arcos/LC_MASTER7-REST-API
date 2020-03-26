import axios from 'axios';

const baseUrl = 'http://localhost:3050';

export const getAllCars = () => {
   const url = `${baseUrl}/api/cars`;
   return fetch(url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error));
}

export const getCarById = (id) => {
   const url = `${baseUrl}/api/cars/${id}`;
   return fetch(url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error));
}

export const addCar = (car) => {
   const url = `${baseUrl}/api/cars`;
   const data = JSON.stringify(car);

   return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: data
   })
   .then((response) => response.json())
   .then((data) => data)
   .catch((error) => console.log(error));
};