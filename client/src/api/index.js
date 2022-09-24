import axios from "axios";

//-PEM-
const urlPEM = "https://jober12.herokuapp.com/pem";

export const fetchPEM = () => axios.get(urlPEM);

export const createPEM = (newPEM) => axios.post(urlPEM, newPEM);

export const updatePEM = (id, updatePEM) =>
  axios.patch(`${urlPEM}/${id}`, updatePEM);

export const deletePEM = (id) => axios.delete(`${urlPEM}/${id}`);

//-customer--
const urlCustomer = "https://jober12.herokuapp.com/customer";

export const fetchCustomer = () => axios.get(urlCustomer);

export const createCustomer = (newCustomer) =>
  axios.post(urlCustomer, newCustomer);

export const updateCustomer = (id, updateCustomer) =>
  axios.patch(`${urlCustomer}/${id}`, updateCustomer);

export const deleteCustomer = (id) => axios.delete(`${urlCustomer}/${id}`);

//--shop--
const urlShop = "https://jober12.herokuapp.com/shop";

export const fetchShop = () => axios.get(urlShop);

export const createShop = (newShop) => axios.post(urlShop, newShop);

export const updateShop = (id, updateShop) =>
  axios.patch(`${urlShop}/${id}`, updateShop);

export const deleteShop = (id) => axios.delete(`${urlShop}/${id}`);

//--Admin--
const urlAdmin = "https://jober12.herokuapp.com/admin";

export const fetchAdmin = () => axios.get(urlAdmin);

export const createAdmin = (newAdmin) => axios.post(urlAdmin, newAdmin);

export const updateAdmin = (id, updateAdmin) =>
  axios.patch(`${urlAdmin}/${id}`, updateAdmin);

export const deleteAdmin = (id) => axios.delete(`${urlAdmin}/${id}`);
