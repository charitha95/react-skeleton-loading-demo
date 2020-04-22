import React from 'react';
import './style.css';
import Skeleton from '../Skeleton';

const Card = props =>
  <div className="card">
    <div className="card__container">
      <div className="card__content">
        <div className="card__content--left flex__item">
          {props.card.img ? <img src={props.card.img} alt="" /> :
            <Skeleton
              center
              circle={props.elements.img.circle}
              height={props.elements.img.height}
              width={props.elements.img.width}
              classes='image-skeleton'
            />
          }


          <div className="card__content--header">
            <h2>{props.card.title || <Skeleton colors={{
              background: props.elements.title.background,
              pulse: props.elements.title.pulse
            }} />}
            </h2>
            <h4>{props.card.subTitle || <Skeleton 
            width={props.elements.sub.width}
            center={props.elements.sub.center}
            />}</h4>
          </div>
        </div>
        <div className="card__content--right flex__item content">
          <p>
            {props.card.body || <Skeleton count={props.elements.body.count} margin={props.elements.body.margin} />}
          </p>
        </div>
      </div>
    </div>
  </div>

export default Card;