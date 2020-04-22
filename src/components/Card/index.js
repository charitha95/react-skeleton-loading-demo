import React from 'react';
import './style.css';
import Skeleton from '../Skeleton';

const Card = props =>
  <div className="card">
    <div className="card__container">
      <div className="card__content">
        <div className="card__content--left flex__item">
          {props.img ? <img src={props.img} alt="" /> :
            <Skeleton
              center
              circle
              height={75}
              width={75}
              colors={{ background: '#DD2A7B', pulse: '#8134AF' }}
              classes='image-skeleton'
            />
          }


          <div className="card__content--header">
            <h2>{props.title || <Skeleton />} </h2>
            <h4>{props.subTitle || <Skeleton />}</h4>
          </div>
        </div>
        <div className="card__content--right flex__item">
          <p>
            {props.body || <Skeleton count={4} margin={10} />}
          </p>
        </div>
      </div>
    </div>
  </div>

export default Card;