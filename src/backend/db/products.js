import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "b383e4c6-f5db-4527-8b56-eeae6609dju3",
    name: "ARCH FIT ORVAN - VERDIGO",
    brand: "Skechers",
    price: 8759,
    type: "running",
    description:
      "Supportive comfort and easy-wearing style combine in Skechers Arch Fit® Orvan - Verdigo. This slip-on features a heathered mesh and synthetic upper with stretch laces, removable Arch Fit® insole and lightweight Glide-Step® geometric cushioning.",
    img: [
      "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw4bd2afc4/images/large/195969529270-1.jpg",
      "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dwd1c39735/images/large/195969529270-2.jpg",
      "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw5bb26e1b/images/large/195969529270-4.jpg",
      "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw4fe06580/images/large/195969529270-3.jpg",
    ],
    rating: 4.1,
    id: "6",
  },
  {
    _id: "cjs6e4c6-35db-4557-8b56-eeae6609dju3",
    name: "FuelCell SuperComp",
    brand: "New Balance",
    price: 16299,
    type: "running",
    description:
      "The FuelCell SuperComp Trainer v2 is a high mileage training shoe that incorporates energy-return technology from race day. It features Energy Arc technology, with a carbon fiber plate sandwiched between layers of FuelCell cushioning, creating a hollow channel in the middle. The plate flattens upon foot strike and returns energy, providing a high rebound sense of propulsion. The shoe is designed to have a distinct look, feel, and performance.",
    img: [
      "https://nb.scene7.com/is/image/NB/mrcxlg3_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/mrcxlg3_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/mrcxlg3_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/mrcxlg3_nb_06_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
    ],
    rating: 4.8,
    id: "7",
  },
  {
    _id: "eyc9e4c6-f5db-8f63-8b56-eeae6609dju3",
    name: "X_PLRBOOST SHOES",
    brand: "Adidas",
    price: 17999,
    type: "running",
    description:
      "Up the style. Up the energy. These BOOST sneakers are responsive and stylish. The soft upper is lined for comfort. It sits atop a BOOST midsole that gives you ultimate comfort with each step.Made with a series of recycled materials, this upper features at least 50% recycled content.This product represents just one of our solutions to help end plastic waste.",
    img: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf7a1362b0a9455192d1af9c00c5fdeb_9366/X_PLRBOOST_Shoes_Blue_HP3143_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d470009e0ade4deab163af9c00c61a9e_9366/X_PLRBOOST_Shoes_Blue_HP3143_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/af6ff00a5d3d4147a921af9c00c63d26_9366/X_PLRBOOST_Shoes_Blue_HP3143_05_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad0f824664ae4061a732af9c00c62283_9366/X_PLRBOOST_Shoes_Blue_HP3143_03_standard.jpg",
    ],
    rating: 4.5,
    id: "8",
  },
  {
    _id: "eyc5e4c6-f5db-8303-7sg6-eeae6609dju3",
    name: "Pegasus Trail 4 GORE-TEX",
    brand: "Nike",
    price: 12995,
    type: "running",
    description:
      "The Nike Pegasus Trail 4 GORE-TEX is your running companion for those days when the weather turns. Its waterproof GORE-TEX layer helps keep your feet dry, and less rubber in the outsole creates a smooth transition from road to trail without breaking stride.",
    img: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1163a010-7440-4b9c-9b5b-0dfbf691b237/pegasus-trail-4-gore-tex-waterproof-trail-running-shoes-pQ2Pzs.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33443e3d-ff4b-415b-b226-5803b1db2c24/pegasus-trail-4-gore-tex-waterproof-trail-running-shoes-pQ2Pzs.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ae18cb97-2bf1-4ed4-8748-5224b90e25b8/pegasus-trail-4-gore-tex-waterproof-trail-running-shoes-pQ2Pzs.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f5bf37de-8cd3-4ce4-9b37-93e63264e4e9/pegasus-trail-4-gore-tex-waterproof-trail-running-shoes-pQ2Pzs.png",
    ],
    rating: 3.9,
    id: "9",
  },
  {
    _id: "0b3cbf86-6c16-4200-b4fc-c2a7fc2d9922",
    name: "Air Max 90 SE",
    brand: "Nike",
    price: 10975,
    type: "sneaker",
    description:
      "Step into the history books. Paying homage to Frank Rudy, the man who created the coveted cornerstone of cushioning—Air—these sneakers celebrate his legacy with fun details. From the release year proudly stamped on the Air unit to the see-through 'Air pocket' heel logo, striking visuals deliver a lesson in comfort.",
    img: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67cf2b36-73ef-443a-8e99-a496eff525d6/air-max-90-se-shoes-7dKD8F.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ff15c794-e8bf-41d5-a2c1-b44aa9ef7990/air-max-90-se-shoes-7dKD8F.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/26fd032c-f377-4d9e-864e-2b7fe6ba883f/air-max-90-se-shoes-7dKD8F.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4841dae4-e65e-4a73-b9c5-c2fc31d10a88/air-max-90-se-shoes-7dKD8F.png",
    ],
    rating: 4.3,
    id: "4",
  },
  {
    _id: "9213733c-75be-4a17-bdax-7a5f642d1b73",
    name: "Fresh Foam X Hierro v7 GTX",
    brand: "New Balance",
    price: 16995,
    type: "running",
    description:
      "People love the idea of adventure in the great outdoors, but there’s more to the natural landscape than fresh air and scenic views. Uneven terrain, debris, and moisture are unique challenges to footwear that require specialized construction. For those who take going off the beaten path literally, there’s the Fresh Foam X Hierro, a dedicated, off-road application of our best running technology. The New Balance Fresh Foam X Hierro v7 GTX women's running shoe employs a Vibram® Megagrip outsole and a GORE-TEX® waterproof lining to create a protective shell of durability and traction around the signature Fresh Foam X cushioning.",
    img: [
      "https://nb.scene7.com/is/image/NB/wthier7a_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/wthier7a_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/wthier7a_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/wthier7a_nb_06_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
    ],
    rating: 4.1,
    id: "10",
  },
  {
    _id: "3721d1a7-8e25-4asa-bd81-0c5b0131b554",
    name: "Men's Sandal",
    brand: "Sparx",
    price: 700,
    type: "casual",
    description:
      "A pair of navy blue and red-toned textured floater sports sandals, secured with a velcro closure. It has Synthetic upper,Cushioned footbed,Textured and patterned outsole.",
    img: [
      "https://m.media-amazon.com/images/I/514HXHE8EcL._UY695_.jpg",
      "https://m.media-amazon.com/images/I/719A7GN-JgL._UX695_.jpg",
      "https://m.media-amazon.com/images/I/81IXdSZdxlL._UY695_.jpg",
    ],
    rating: 3.2,
    id: "11",
  },
  {
    _id: "4d425385-99a8-4a8f-9bed-00bc165f095b",
    name: "Old Skool",
    brand: "Vans",
    price: 5600,
    type: "sneaker",
    description:
      "The Old Skool was Van's first footwear design to showcase the famous Vans Sidestripe—although back then, it was just a random doodle drawn by founder Paul Van Doren. Since its debut in 1977, this low-top silhouette has established itself as an icon in the skate, music, and fashion scenes. From 90s street skaters and punks to current hip hop and fashion legends, the Old Skool has consistently been the go-to shoe for creatives who do things their own way.",
    img: [
      "https://images.vans.com/is/image/Vans/VN000D3H_Y28_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
      "https://images.vans.com/is/image/Vans/VN000D3H_Y28_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
      "https://images.vans.com/is/image/Vans/VN000D3H_Y28_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
      "https://images.vans.com/is/image/Vans/VN000D3H_Y28_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
    ],
    rating: 3.5,
    id: "1",
  },
  {
    _id: "cjx5e4c6-f5db-4557-8b56-eeae6609dju3",
    name: "Originals Superstars",
    brand: "Adidas",
    price: 8899,
    type: "sneaker",
    description:
      "Originally made for basketball courts in the '70s. Celebrated by hip hop royalty in the '80s. The adidas Superstar shoe is now a lifestyle staple for streetwear enthusiasts. The world-famous shell toe feature remains, providing style and protection. Just like it did on the B-ball courts back in the day. Now, whether at a festival or walking in the street you can enjoy yourself without the fear of being stepped on. The serrated 3-Stripes detail and adidas Superstar box logo adds OG authenticity to your look.",
    img: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/SUPERSTAR_SHOES_White_EG4958_04_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d0933f855c445fea224aad600bac8b7_9366/SUPERSTAR_SHOES_White_EG4958_09_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a358bcd5e3d453da815aad6009a249e_9366/SUPERSTAR_SHOES_White_EG4958_02_standard_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/31cf91f6e16c4f0aa11caad6009a4590_9366/SUPERSTAR_SHOES_White_EG4958_05_standard.jpg",
    ],
    rating: 4.1,
    id: "2",
  },
  {
    _id: "9921d1a7-8e25-4a9a-bd61-0c5b01312ve4",
    name: "Yeezy Boost 350",
    brand: "Adidas",
    price: 28000,
    type: "sneaker",
    description:
      "The YEEZY BOOST 350 features an upper composed of multi-toned re-engineered primeknit with reflective threading. The post-dyed monofilament side stripe is woven into the upper. The midsole utilizes adidas’ innovative BOOST™ technology.",
    img: [
      "https://cdn.shopify.com/s/files/1/0015/6123/1434/products/AdidasYeezyBoost350V2Zebra_768x.png?v=1650495820",
      "https://thrifter.in/image/cache/catalog/2%20New/12431289_23446499_1000-1100x1100h.jpg",
      "https://crepdogcrew.com/cdn/shop/files/YEEZYBOOST350V2ZEBRA3_986a301a-ba91-4795-8d59-f42d542741d2_900x.jpg?v=1689851538",
      "https://assets.bigcartel.com/product_images/200074888/adidas-Yeezy-Boost-350-V2-Zebra-1.jpg?auto=format&fit=max&w=1500",
    ],
    rating: 3.9,
    id: "3",
  },
  {
    _id: "e71c6b63-5908-4204-985c-7ba520bf1457",
    name: "Clogs UNISEX Sandal",
    brand: "Crocs",
    price: 2500,
    type: "casual",
    description:
      "Two of the most iconic clog silhouettes – Baya and Crocband™ – are combined to create a special pair that elevates the sleek, fashion-athletic spirit of the originals to another level. The result is a go-anywhere style staple that lets you slide in and stay cool while throwing off an extra pop of Crocs spirit.Heel strap for a more secure fit & Iconic Crocs Comfort™: original Croslite™ foam cushion",
    img: [
      "https://www.crocs.in/media/catalog/product/1/1/11016_410_alt100.jpeg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover",
      "https://www.crocs.in/media/catalog/product/1/1/11016_410_alt120.jpeg?auto=webp&format=pjpg&width=320&height=400&fit=cover",
      "https://www.crocs.in/media/catalog/product/1/1/11016_410_alt140.jpeg?auto=webp&format=pjpg&width=320&height=400&fit=cover",
      "https://www.crocs.in/media/catalog/product/1/1/11016_410_alt110.jpeg?auto=webp&format=pjpg&width=320&height=400&fit=cover",
    ],
    rating: 3.7,
    id: "12",
  },
  {
    _id: "a721d1b4-8e03-4a9a-bd61-0c5b0131b554",
    name: "SPONGEBOB RS SLIDE",
    brand: "Puma",
    price: 5599,
    type: "casual",
    description:
      "Who says cartoons aren’t for grown-ups? We’ve partnered with Nickelodeon to bring you these slides, inspired by everyone’s favourite sea sponge, SpongeBob SquarePants. Release your playful side this summer with bright colours, an eye-catching design, and a woven label featuring SpongeBob himself.",
    img: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/391010/01/sv01/fnd/IND/fmt/png/PUMA-x-SPONGEBOB-RS-Slide-Unisex-Slides",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/391010/01/fnd/IND/fmt/png/PUMA-x-SPONGEBOB-RS-Slide-Unisex-Slides",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/391010/01/sv03/fnd/IND/fmt/png/PUMA-x-SPONGEBOB-RS-Slide-Unisex-Slides",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/391010/01/sv04/fnd/IND/fmt/png/PUMA-x-SPONGEBOB-RS-Slide-Unisex-Slides",
    ],
    rating: 3.2,
    id: "13",
  },
  {
    _id: "3721d1a7-8e25-4asa-bd62-0c5b0131b554",
    name: "Air Max 1 Slides",
    brand: "Nike",
    price: 6290,
    type: "casual",
    description:
      "The Nike Air Max 1 Slides re-imagine the legendary design for summertime fun. Crossing sneaker tech with slide style, it includes a near 1:1 remake of the original running shoe's outsole, while the plush strap mimics the original upper. To top it off, the textured footbed features soft foam that cradles your foot so you can focus on the fun.",
    img: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29e6596f-3d1d-4b35-8e4f-8f4740ea00a6/air-max-1-slides-TSMTS4.png",
      "https://static.nike.com/a/images/t_default/6d5d4096-9287-4d1b-9099-9f9c48be9d59/air-max-1-slides-TSMTS4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f4b6cc02-1e6a-4dea-82a1-7b5d4617899f/air-max-1-slides-TSMTS4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e70b050c-17d8-4089-9679-5a0c9da74dcc/air-max-1-slides-TSMTS4.png",
    ],
    rating: 3.8,
    id: "14",
  },
  {
    _id: "ada21d1a7-8g15-4a9a-bd61-0c5b0131bf54",
    name: "Air Jordan 2 Retro Low Titan",
    brand: "Nike",
    price: 19247,
    type: "sneaker",
    description:
      "Spread the love. Tell the stories. Step into greatness. Teaming up with Filipino basketball collective, Titan, this timeless take on the AJ2 bridges past, present and future. With an unquestionable passion for the game, designer Chi Loyzaga-Gibbs sets the stage with an honorary look that's rooted to the beloved 1954 Filipino national team. Premium suede, richly textured corduroy and crisp leather are combined with a speckled midsole, while original artwork connects you to the hoops heartbeat no matter where you are.",
    img: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fec7649b-7347-40ac-a897-edc21a66a83d/air-jordan-2-retro-low-titan-shoes-753NG3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e707530-f9a3-4e8b-9186-754d432d1908/air-jordan-2-retro-low-titan-shoes-753NG3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/412105ec-98f2-46dc-b058-c72531461ba1/air-jordan-2-retro-low-titan-shoes-753NG3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/616cc9a9-dc24-47c3-b903-c94ca0a713d5/air-jordan-2-retro-low-titan-shoes-753NG3.png",
    ],
    rating: 4.5,
    id: "5",
  },

  {
    _id: "8002d1a7-8e25-4a9a-bd61-0c5b0131b554",
    name: "SOFTRIDE Unisex Sandals",
    brand: "Puma",
    price: 1295,
    type: "casual",
    description:
      "PUMA's SOFTRIDE technology represents an advancement in footwear comfort. It incorporates our softest foam, designed to deliver extreme cushioning that promotes sustained comfort throughout the day. The SOFTRIDE midsole, softer and lighter than traditional EVA, extends through the full length of the shoe. This innovative construction enhances the wearer's experience, providing lightweight support during daily activities.",
    img: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/375104/02/sv01/fnd/IND/fmt/png/SOFTRIDE-Unisex-Sandals",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/375104/02/sv04/fnd/IND/fmt/png/SOFTRIDE-Unisex-Sandals",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/375104/02/fnd/IND/fmt/png/SOFTRIDE-Unisex-Sandals",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/375104/02/bv/fnd/IND/fmt/png/SOFTRIDE-Unisex-Sandals",
    ],
    rating: 3.4,
    id: "15",
  },
];
