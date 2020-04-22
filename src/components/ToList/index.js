import React from 'react';

const ToList = props => {
    console.log(props)
    props.list.map(line => line);

}
export default ToList;