import React from 'react';
import './style.css'
/**
 * 
 * @param {string} colors object containing background and pulse colors.
 * @param {string} width width of the skeleton line.
 * @param {string} height height of the skeleton line.
 * @param {boolean} center makes it center to the parent.
 * @param {boolean} circle makes a skeleton a circle instead of a line.
 * @param {number} count repeats the skeleton.
 * @param {number} margin bottom margin of the skeleton.
 */
const Skeleton = ({ colors, width, height, center, circle, count, margin }) => {

  const background = colors ? colors.background || '#f0f0f0' : '#f0f0f0';
  const pulse = colors ? colors.pulse || '#f8f8f8' : '#f8f8f8';
  const styleObj = {
    display: 'inherit',
    height: `${height ? `${height}px` : '100%'}`,
    width: `${width ? `${width}px` : '100%'}`,
    background: `linear-gradient(-90deg, ${background} 0%, ${pulse} 50%, ${background} 100%) `,
    backgroundSize: '400% 400%',
    animation: 'pulse-a11d275 1.2s ease-in-out infinite',
    borderRadius: `${circle ? '100%' : '5px'}`,
    margin: `${center ? 'auto' : 0}`
  }

  let element = null;

  if (count > 0) {
    element = [...Array(count).keys()].map((_, key) => <span key={key} style={{ ...styleObj, marginBottom: `${margin}px` }} className='react-skeleton'></span>)
  } else {
    element = <span className='react-skeleton' style={styleObj} />
  }

  return element
}

export default Skeleton;