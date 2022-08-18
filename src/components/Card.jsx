import React from "react";

function Card(props) {
  return (
      <>
        <div className='card'>
          <img src={props.imgSrc} alt='myPic' className='card__img' />
          <div className='card__info'>
            <span className='card__category'>{props.title}</span>
            <h3 className='card__title'>{props.sname}</h3>
            <a href={props.links} rel="noreferrer" target='_blank'>
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </>
  );
}

export default Card;
