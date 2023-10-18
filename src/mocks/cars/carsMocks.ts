import { CarBrandDataStructure } from "../../types";

export const carsMock: CarBrandDataStructure[] = [
  {
    nombre: "Seat",
    modelos: [
      {
        id: "001",
        nombre: "Arona",
        img: "https://www.diariomotor.com/imagenes/2018/03/skoda_lanzamiento_su_seat_arona_00.jpg",
      },
      {
        id: "002",
        nombre: "Ibiza",
        img: "https://www.seat.com/content/dam/public/seat-website/carworlds/new-cw-ibiza/overview/version-view/ibiza-fr/seat-ibiza-fr-colour-red-desire.png",
      },
      {
        id: "003",
        nombre: "Leon",
        img: "https://www.topgear.com/sites/default/files/images/news-article/carousel/2019/01/4e9fb55f7ef03a11029c2fb4864fb621/20181201_siemoneitracing_vader_leoncuprast_001_front34_online.jpg",
      },
    ],
  },
  {
    nombre: "Mercedes-Benz",
    modelos: [
      {
        id: "004",
        nombre: "Classe A",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg/1920px-2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg",
      },
      {
        id: "005",
        nombre: "Classe C",
        img: "https://www.autobild.es/sites/autobild.es/public/dc/fotos/batch_20C0673_002.jpg",
      },
      {
        id: "006",
        nombre: "Classe G",
        img: "https://img.remediosdigitales.com/9afd76/21c0550_001/1366_2000.jpeg",
      },
    ],
  },
];
