import React, { useState } from 'react'
import Divider from './Divider';
import Card from './Card';

const Seasion = () => {
    const [fruits, setFruits] = useState([
        {
          id: 7,
          image: "https://as1.ftcdn.net/jpg/04/00/21/02/480_F_400210262_clX1dCDFBPMIvOJzjhPtNs9lpDTo6wwY.jpg?token=1693889789_IuR2eYvCAY5q4sxbf4w3TKkgxMSD12Ouds1qQUZqhko",
          name: "Orange",
          price: 100,
        },
        {
          id: 1,
          image: "https://t4.ftcdn.net/jpg/00/58/38/01/240_F_58380136_Zi2JOpclQvongQvJM20lgL4g4BXxSCds.jpg",
          name: "Green Grapes",
          price: 100,
        },
        {
          id: 6,
          image: "https://t3.ftcdn.net/jpg/03/89/82/76/240_F_389827610_UvcGLKwLGdHR09TGeooxgBh0x44IFF5a.jpg",
          name: "lemon",
          price: 150,
        },
      ]);
  return (
    <section className="w-5/6 mx-auto my-10">
    <Divider title={'Season Specials'}/>

    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10">
      {fruits.map((item) => {
        return  <div key={item.id} className="rounded-2xl overflow-hidden shadow-2xl transform group hover:scale-110 duration-100 relative">
        <img src={item.image} alt={item.name} className="w-full h-56 object-cover"/>
       <div className="flex flex-col items-center my-1  space-y-1">
        <span className="font-body text-slate-500 block hover:text-green-700">{item.name}</span>
        <span className="font-body text-slate-500 block">$ {item.price}</span>
        <span className="font-body block uppercase text-lime-400 text-xs group-hover:visible invisible">Add to Cart</span>
        </div>
        <span className="absolute top-3 right-3 bg-sky-300 text-white border-sky-300 p-1 rounded-lg text-sm">1% off</span>
      </div>
      })}
    </div>
  </section>
  )
}

export default Seasion