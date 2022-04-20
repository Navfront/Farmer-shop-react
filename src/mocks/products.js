import photo1 from "../assets/products/photo1.jpg";
import photo2 from "../assets/products/photo2.jpg";
import photo3 from "../assets/products/photo3.jpg";
import photo4 from "../assets/products/photo4.jpg";
import photo5 from "../assets/products/photo5.jpg";

const productData = [
  {
    id: 1,
    productName: "chicken",
    productTitle: "Филе бедра цыпленка",
    price: 400,
    amount: 700,
    content: {
      photoUrl: photo1,
      description:
        "Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
      characteristics: {
        fullAmount: "0,7 кг. (595-805 г.).",
        expiration: "6 суток",
        race: "КОББ 500.",
        from: "Тверская область",
      },
      properties: {
        energy: "135 ккал./565 кДж.",
        foodValue: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.",
      },
    },
  },
  {
    id: 2,
    productName: "guss",
    productTitle: "Филе бедра гуся",
    price: 430,
    amount: 700,
    content: {
      photoUrl: photo2,
      description:
        "Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.",
      characteristics: {
        fullAmount: "0,7 кг. (595-805 г.).",
        expiration: "6 суток",
        race: "КОББ 500.",
        from: "Тверская область",
      },
      properties: {
        energy: "135 ккал./565 кДж.",
        foodValue: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.",
      },
    },
  },
  {
    id: 3,
    productName: "cow",
    productTitle: "Мякоть бедра говяжья",
    price: 500,
    amount: 700,
    content: {
      photoUrl: photo3,
      description: "123123123.",
      characteristics: {
        fullAmount: "0,7 кг. (595-805 г.).",
        expiration: "6 суток",
        race: "КОББ 500.",
        from: "Тверская область",
      },
      properties: {
        energy: "135 ккал./565 кДж.",
        foodValue: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.",
      },
    },
  },
  {
    id: 4,
    productName: "chikenbone",
    productTitle: "Грудка цыпленка на кости",
    price: 666,
    amount: 700,
    content: {
      photoUrl: photo4,
      description: "123123123.",
      characteristics: {
        fullAmount: "0,7 кг. (595-805 г.).",
        expiration: "6 суток",
        race: "КОББ 500.",
        from: "Тверская область",
      },
      properties: {
        energy: "135 ккал./565 кДж.",
        foodValue: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.",
      },
    },
  },
  {
    id: 5,
    productName: "chikenfoot",
    productTitle: "Голень цыпленка",
    price: 223,
    amount: 700,
    content: {
      photoUrl: photo5,
      description: "123123123.",
      characteristics: {
        fullAmount: "0,7 кг. (595-805 г.).",
        expiration: "6 суток",
      },
      properties: {
        energy: "135 ккал./565 кДж.",
        foodValue: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.",
      },
    },
  },
];

export default productData;
