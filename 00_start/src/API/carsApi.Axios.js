import axios from 'axios';

const baseUrl = 'http://localhost:3050';

export const getAllCars = () => {
   const url = `${baseUrl}/api/cars`;
   return axios.get(url)
      .then((result) => result.data)
      .catch((error) => console.log(error));
      
}

export const getCarById = (id) => {
   const url = `${baseUrl}/api/cars/${id}`;
   return axios.get(url)
      .then((result) => result.data)
      .catch((error) => console.log(error));
}

export const addCar = (car) => {
   const url = `${baseUrl}/api/cars`;
   const data = JSON.stringify(car);

   return axios.post(url, car)
      .then((result) => result.data)
      .catch((error) => console.log(error));
};