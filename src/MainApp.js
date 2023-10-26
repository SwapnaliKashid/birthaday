import React, { useState } from "react";
import Data from "./Data";
import "./Data.css";

const MainApp = () => {
  const [data,setData] =useState(Data)
  return (
    <section>
      <div className="mainapp">


        
        <h1>Todays Birthday {Data.length}</h1>
        {data.map((e) => {
          return (
              
            <div key={e.id}>
               <img src={e.img} alt="" height={"50px"} width={"50px"} />
              <h1>{e.name}</h1>
              <p>{e.id}</p>
              <p className="p1">{e.age}</p>
             
              </div>
          );
        })}
        <button onClick={()=>setData([])}>ClearAll</button>
      </div>
    </section>
  );
};

export default MainApp;