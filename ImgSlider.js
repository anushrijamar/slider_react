import React from 'react';
import myImage from './dore.jpg';
import myImage2 from './doremon copy.png'
import myImage1 from './doru.jpg'
import { useState,useEffect } from 'react';

export const ImgSlider = () => {
    const [showImage, setShowImage] = useState(false);
    const [showImage1, setShowImage1] = useState(false);
    const [showImage2, setShowImage2] = useState(false);
    var i=0;
      useEffect(() => {
        const interval = setInterval(() => {
            const myArray = [false, false, false];
            myArray[i] = true;
            setShowImage(myArray[0]);
            setShowImage1(myArray[1]);
            setShowImage2(myArray[2]);
            i++;
            if(i==3)
            i=0;
            console.log('Button clicked!');
        }, 1000); 
        return () => {
          clearInterval(interval);
        };
      }, []); 
    const divStyle = {
        backgroundColor: 'blue',
        color: 'white',
        // padding: '10px',
        width:'100%',
        height:'450px',
      };
  return (
    <div >
    {showImage &&<img src={myImage} style={divStyle}></img>}
    {showImage1 && <img src={myImage1} style={divStyle}></img> }
    {showImage2 && <img src={myImage2} style={divStyle}></img> }
    {/* <button onClick={next} >Next</button> */}
    </div>
  )
}
export default ImgSlider;
