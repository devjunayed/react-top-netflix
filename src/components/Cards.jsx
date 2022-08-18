import React from "react";
import Card from "../components/Card";
import Sdata from "../Sdata";

function Cards() {
  return (
    <>
      <div className='cards'>
        {Sdata.map((data) => {
          return (
            <Card
              key={data.key}
              imgSrc={data.imgSrc}
              title={data.title}
              sname={data.sname}
              links={data.links}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cards;
