// CSS
import './reactcarusel.css'
// REACT CARUSEL
import React, { Component } from "react";
// REACT SLICK
import Slider from "react-slick";

// ICON
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
// IMG
import img from '../../images/herodan-keyin-img/img1.jpg'
import img1 from '../../images/herodan-keyin-img/img2.jpg'
import img2 from '../../images/herodan-keyin-img/img3.jpg'
import img3 from '../../images/herodan-keyin-img/img4.jpg'
import img4 from '../../images/herodan-keyin-img/img5.jpg'

const ReactCarusel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className='react_carusel'>
      <div className='container'>
        <Slider {...settings}>
          <div className='carusel_me'>
            <div className="carsel_me_div">
              <div className="carusel_me_img">
                <img src={img} alt="" />
              </div>
              <div className="carusel_me_text">
                <p className='carusel_me_text_p'>"Hosting has been so rewarding and life-changing. It’s allowed us to pursue our passion for interior design and helped us realize our niche—that we really love renovating spaces for others to enjoy."</p>
                <p className='carusel_me_text_p1'>Catherine, <br />
                interior designer and Host in Columbus, Ohio</p>
                <a href="#" className='carusel_me_text_p2'>Get Host tips</a>
              </div>
            </div>
          </div>
          <div className='carusel_me'>
            <div className="carsel_me_div">
              <div className="carusel_me_img">
                <img src={img1} alt="" />
              </div>
              <div className="carusel_me_text">
                <p className='carusel_me_text_p'>"Give yourself permission to play. I’ve poured so much love into [restoring this space]—and I think guests come back for that very reason."</p>
                <p className='carusel_me_text_p1'>Tiffany, <br />
                former creative director and Host in Hollywood Beach, California</p>
                <a href="#" className='carusel_me_text_p2'>Get Host tips</a>
              </div>
            </div>
          </div>
          <div className='carusel_me'>
            <div className="carsel_me_div">
              <div className="carusel_me_img">
                <img src={img2} alt="" />
              </div>
              <div className="carusel_me_text">
                <p className='carusel_me_text_p'>"As a designer, I find that I remember spaces even more than conversations. I love the idea that so many other people can make memories here, and that the stuff I fill my house with sparks something. It makes me so happy."</p>
                <p className='carusel_me_text_p1'>Evette, <br />
                interior designer and Host in New York, New York</p>
                <a href="#" className='carusel_me_text_p2'>Read Host story</a>
              </div>
            </div>
          </div>
          <div className='carusel_me'>
            <div className="carsel_me_div">
              <div className="carusel_me_img">
                <img src={img3} alt="" />
              </div>
              <div className="carusel_me_text">
                <p className='carusel_me_text_p'>"Airbnb has become an integral way I practice my architecture. I now design and build properties with the intent of both creating my vision and sharing it through hosting."</p>
                <p className='carusel_me_text_p1'>David, <br />
                architect and Host in New York, New York</p>
                <a href="#" className='carusel_me_text_p2'>Visit Host profile</a>
              </div>
            </div>
          </div>
          <div className='carusel_me'>
            <div className="carsel_me_div">
              <div className="carusel_me_img">
                <img src={img4} alt="" />
              </div>
              <div className="carusel_me_text">
                <p className='carusel_me_text_p'>"Hosting gives us the opportunity to design houses for ourselves. It gives us a chance to try ideas that we can use on projects for our clients. We've landed quite a few jobs from guests who stayed at our place."</p>
                <p className='carusel_me_text_p1'>Kevin, <br />
                architect and Host in New York, New York</p>
                <a href="#" className='carusel_me_text_p2'>Visit Host profile</a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ReactCarusel;

const NextArrow = ({onClick}) => {
  return (
    <div className='nextt_me next_leftt'  onClick={onClick}>
      <IoIosArrowForward/>
    </div>
  )
}


const PrevArrow = ({onClick}) => {
  return (
    <div className='nextt_me prev_leftt' onClick={onClick}>
      <IoIosArrowBack/>
    </div>
  )
}