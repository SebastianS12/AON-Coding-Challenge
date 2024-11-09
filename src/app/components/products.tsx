"use client";
import { useEffect, useState } from "react";

export default function Products() {
  

    interface Item {
      id: number;
      name: string;
  
  }
    const [data, setData] = useState<any>([]);
  
    useEffect(() => {
      fetch('products.json')
        .then(response => response.json())
        .then(json => setData(json));
    }, []);
  
    if (!data) {
      return <p>Loading...</p>;
    }

    const addSpaghettiItem = () => {
      let id = data.length > 0 ? Number(data.reduce((a,b)=>a.id>b.id?a:b).id) + 1 : 1;
      setData(prevData => [...prevData, { id: id, name: "Spaghetti" }]);
    };

    const removeLastItem = () => {
      setData(prevData => prevData.slice(0,-1));
    };

    return (
        <div>
      <ul>
        {(data as Item[]).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addSpaghettiItem} value="Spaghetti">
      Add Spaghetti
    </button>
          <button onClick={removeLastItem}>Remove last item</button>
    </div>      
    );
  }

