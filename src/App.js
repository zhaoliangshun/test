import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import Slider from './react-slick';

const baseUrl = 'https://s3.amazonaws.com/static.neostack.com/img/react-slick';

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

export default () => {
  const SliderContentRef = useRef();
  const [settings, setSettings] = useState();
  const [isload, setIsload] = useState(false);
  useEffect(() => {
    setIsload(true);
    if (SliderContentRef.current.offsetWidth < arr.length * 100) { //fa
      setSettings({
        dots: false,
        infinite: false,
        speed: 100,
        initialSlide: 0,
        swipeToSlide: true,
        variableWidth: true,
        arrows: true,
        slidesToScroll: Math.floor(SliderContentRef.current.offsetWidth / 100),
        slidesToShow: Math.floor(SliderContentRef.current.offsetWidth / 100),
      });
    } else {
      setSettings('unslick');
    }
  }, []);
  return (
    <div ref={SliderContentRef} style={{ width: '80%', margin: 'auto' }}>
      {isload &&
        (settings === 'unslick' ? (
          arr.map((item, index) => {
            return (
              <h1 style={{ width: 100 }} key={index}>
                {item}
              </h1>
            );
          })
        ) : (
          <Slider {...settings}>
            {arr.map((item, index) => {
              return (
                <h1 style={{ width: 100 }} key={index}>
                  {item}
                </h1>
              );
            })}
          </Slider>
        ))}
    </div>
  );
};
