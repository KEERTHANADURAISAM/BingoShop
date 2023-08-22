import React, { useState } from "react";

const Filters = () => {
  const [item, setItem] = useState(1);

  return (
    <section className="my-10 py-3  w-3/6 md:w-4/6 mx-auto flex-col md:flex-row flex justify-around">
      <button
        onClick={() => setItem(1)}
        className={`btnstyle ${
          setItem === 1 ? "bg-green-400 text-white" : "text-slate-500"
        }`}
      >
        Latest
      </button>
      <button
        onClick={() => setItem(2)}
        className={`btnstyle ${
          setItem === 2 ? "bg-green-600text-white" : "text-slate-500"
        }`}
      >
        Best Seller
      </button>
      <button
        onClick={() => setItem(3)}
        className={`btnstyle ${
          setItem === 3 ? "bg-green-600text-white" : "text-slate-500"
        }`}
      >
        Special
      </button>
    </section>
  );
};

export default Filters;
