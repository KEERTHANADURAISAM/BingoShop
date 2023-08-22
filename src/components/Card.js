import React, { useState } from "react";

const Card = ({item}) => {
  const [fruits, setFruits] = useState([
    {
      id: "1",
      image: "https://t4.ftcdn.net/jpg/00/07/62/87/240_F_7628769_uuazcq6FMZk398hwIvay7lyNWMXua2pL.jpg",
      name:"Raspberries",
      price: 180,
    },
    {
      id: "2",
      image: "https://as1.ftcdn.net/jpg/02/82/75/90/480_F_282759081_dz6WVsJOQVuukcEWrkwLrdiCdAb9W6xz.jpg?token=1693889799_QKbAgI2biv52n5dgwdopFeoyACweqUh-HE-glqSZJRI",
      name: "Dragon fruit",
      price: 150,
    },
    {
        id: "3",
        image:"https://as2.ftcdn.net/jpg/05/68/74/51/480_F_568745156_Pikbforo1aQJvFb7SS6EQekqvm3tXjhA.jpg?token=1693889799_899zE9FEIaxaO9XemiKqDdc1VSw2X8Ax7bbZdbCBKt0",
        name:"Orange",
        price:200,
    },
    {
        id: "4",
        image: "https://as2.ftcdn.net/jpg/03/34/14/65/480_F_334146511_Yg1XvEUGKuOPz15tM8smNqo7N43x07bO.jpg?token=1693889799_uXwCO43rKWK_fBd3erJEvaYfIAIF9qpS3j_ZdMgtaJU",
        name: "Custard apple",
        price: 150,
      },
    
      {
        id: "5",
        image: "https://t3.ftcdn.net/jpg/03/08/46/30/240_F_308463020_gxuXYeeWicotzxo0FzMi86cnKJ4upmXM.jpg",
        name: "Blackberry",
        price: 150,
      },
        {
        id: "6",
        image: "https://t4.ftcdn.net/jpg/00/68/65/13/240_F_68651370_CVcQlAdJqvxtL8bIUm70UP1HwnFXOblQ.jpg",
        name: "Kiwi",
        price: 150,
      },
  ]);

  return (
    <section className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 my-10 p-10 ">
      {fruits.map((item) => {
     return (
          <div key={item.id} className="rounded-2xl overflow-hidden shadow-2xl transform group hover:scale-110 duration-100 relative">
            <img src={item.image} alt={item.name} className="w-full h-56 object-cover"/>
           <div className="flex flex-col items-center my-1  space-y-1">
            <span className="font-body text-slate-500 block hover:text-green-700">{item.name}</span>
            <span className="font-body text-slate-500 block">$ {item.price}</span>
            <span className="font-body block uppercase text-lime-400 text-xs group-hover:visible invisible">Add to Cart</span>
            </div>
            <span className="absolute top-3 right-3 bg-sky-300 text-white border-sky-300 p-1 rounded-lg text-sm">1% off</span>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
