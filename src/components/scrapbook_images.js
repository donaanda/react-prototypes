import React from 'react';

export default props => {
    const {src, style} = props.about;
    console.log(props);
    return (
      <img className="scrapbook-image" style={style} src={src}/>
    )
}