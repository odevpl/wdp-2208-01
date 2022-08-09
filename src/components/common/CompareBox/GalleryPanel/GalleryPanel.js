import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import styles from './GalleryPanel.module.scss';
import './GalleryThumbnails.css';

const GalleryPanel = data => {
  console.log(data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <h2>{data.name}</h2>
      <div className='img container'>
        <img />
        <button>heart</button>
        <button>compare</button>
        <button>watch</button>
        <button>cart</button>
        <div className='sale-price'></div>
        <div className='product-cart'>
          <h4>{data.name}</h4>
          <div>rating</div>
        </div>
      </div>
      <div className='gallerySlider'>
        <Slider {...settings}>
          {data.data.map(slide => (
            <a key={slide.id}>
              <img
                src={`${process.env.PUBLIC_URL}/images/products/${slide.name}.jpg`}
              />
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default GalleryPanel;
