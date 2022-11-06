//si utilizan imagenes desde src, primero las importan y luego las utilizan abajo. Cuando vemoa firebase esta manera no va a funcionar, por eso recomiendo utilziar las img desde una nube o desde public.
//import prod1 from '../img/logo512.png';

export const products = [
  {
    id: 1,
    title: "Perfumes",
    price: 2200,
    stock: 10,
    category: "Perfumes",
    img: "./perfumes.jfif",
  },
  {
    id: 2,
    title: "Medicamentos",
    price: 4300,
    stock: 10,
    category: "Medicamentos",
    img: "./medicamentos.jpg",
  },
  {
    id: 3,
    title: "Desodorantes",
    price: 250,
    stock: 10,
    category: "Desodorantes",
    img: "./desodorantes.jfif",
  },
];
