import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "sneakers",
    description:
      "Style meets comfort to express your unique personality with every step.",
    imgDesktop:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    address: "/products",

    id: "1",
  },
  {
    _id: uuid(),
    categoryName: "running",
    description:
      "Unleash your running potential with our high-performance collection and unlock new levels.",
    imgDesktop:
      "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "/products",

    id: "2",
  },
  {
    _id: uuid(),
    categoryName: "casual",
    description:
      "Level up your streetwear game and enjoy the essence of comfort.",
    imgDesktop:
      "https://images.pexels.com/photos/13097398/pexels-photo-13097398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "/products",
    id: "3",
  },
];
