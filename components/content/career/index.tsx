import React, { useEffect, useState } from 'react'

import Slider from "react-slick";

function CareerContent() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section>
        <div className={`container-fluid `}>
          <div className="container">
            <div className="col-xs">
              <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                  <div>
                    <img src="/imgs/NextJS.png" alt=""/>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>
                    <h3>6</h3>
                  </div>
                </Slider>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default CareerContent