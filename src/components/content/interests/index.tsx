import React from 'react';

import TechBigCard from '../../cards/techbig';

import styles from './interests.module.css';

import Slider from 'react-slick';

function InterestsContent() {
  const settings = {
    // dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const techs = [
    { title: 'NextJS', imgUrl: '/imgs/techs/NextJS.png' },
    { title: 'Git', imgUrl: '/imgs/techs/Git.png' },
    { title: 'Laravel', imgUrl: '/imgs/techs/Laravel.png' },
    { title: 'NodeJS', imgUrl: '/imgs/techs/NodeJS.png' },
    { title: 'PHP', imgUrl: '/imgs/techs/PHP.png' },
    { title: 'React', imgUrl: '/imgs/techs/React.png' },
    { title: 'PWA', imgUrl: '/imgs/techs/PWA.png' },
  ];

  return (
    <>
      <section id="interests">
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              <div className={styles.title}>
                <h2>Tecnologias que mais domino</h2>
              </div>
            </div>
            <div className="col-xs">
              <div>
                <Slider {...settings}>
                  {techs.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <div>
                      <TechBigCard title={item.title} imgUrl={item.imgUrl} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InterestsContent;
