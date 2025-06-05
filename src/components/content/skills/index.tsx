import React from 'react'
// import Fade from 'react-reveal/Fade'

import TechCard from '../../cards/tech'

import styles from './skills.module.css'

import Slider from 'react-slick'

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
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const techs = [
    { title: 'Dart', imgUrl: '/imgs/techs/Dart.png' },
    { title: 'Docker', imgUrl: '/imgs/techs/Docker.png' },
    { title: 'Flutter', imgUrl: '/imgs/techs/Flutter.png' },
    { title: 'React Native', imgUrl: '/imgs/techs/React-Native.png' },
    { title: 'WordPress', imgUrl: '/imgs/techs/WordPress.png' },
    { title: 'Vue', imgUrl: '/imgs/techs/Vue.png' }
  ]

  return (
    <>
      <section id="skills">
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              <div className="col-xs">
                {/* <Fade bottom> */}
                <div className={styles.title}>
                  <h3>Outras que tenho bom conhecimento</h3>
                </div>
                {/* </Fade> */}
              </div>
              <div>
                {/* <Fade bottom> */}
                <Slider {...settings}>
                  {techs.map(item => (
                    <div key={item.title}>
                      <TechCard title={item.title} imgUrl={item.imgUrl} />
                    </div>
                  ))}
                </Slider>
                {/* </Fade> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillsContent
