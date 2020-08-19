import React from 'react';

import TechCard from '../../cards/tech';

import styles from './skills.module.css';

import Slider from 'react-slick';

function SkillsContent() {
  const settings = {
    // dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    { title: 'Dart', imgUrl: '/imgs/techs/Dart.png' },
    { title: 'Docker', imgUrl: '/imgs/techs/Docker.png' },
    { title: 'Flutter', imgUrl: '/imgs/techs/Flutter.png' },
    { title: 'Git', imgUrl: '/imgs/techs/Git.png' },
    { title: 'Laravel', imgUrl: '/imgs/techs/Laravel.png' },
    { title: 'NodeJS', imgUrl: '/imgs/techs/NodeJS.png' },
    { title: 'PHP', imgUrl: '/imgs/techs/PHP.png' },
    { title: 'React', imgUrl: '/imgs/techs/React.png' },
    { title: 'React Native', imgUrl: '/imgs/techs/React-Native.png' },
    { title: 'Vue', imgUrl: '/imgs/techs/Vue.png' },
    { title: 'WordPress', imgUrl: '/imgs/techs/WordPress.png' },
  ];

  return (
    <>
      <section>
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              <div className="col-xs">
                <div className={styles.title}>
                  <h2>Habilidades</h2>
                </div>
              </div>
              <div>
                <Slider {...settings}>
                  {techs.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <div>
                      <TechCard title={item.title} imgUrl={item.imgUrl} />
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

export default SkillsContent;
