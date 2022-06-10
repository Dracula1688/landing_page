// import React
import React from 'react'
// import CSS
import './smallCarusel.css'
// import icons
import {FaArrowCircleRight} from 'react-icons/fa'
import {FaArrowCircleLeft} from 'react-icons/fa'
// import images
import img1 from '../../images/carusel-img/img1.jpg'
import img2 from '../../images/carusel-img/img2.jpg'
import img3 from '../../images/carusel-img/img3.jpg'
import img4 from '../../images/carusel-img/img4.jpg'
import img5 from '../../images/carusel-img/img5.jpg'
// import slider
import Slider from 'react-slick'



// fake data

const data = [
    {
      id: 1,
      img: img1,
      title: "Why Host on Airbnb",
      description: "Hosts reveal what they love about sharing their space on Airbnb."
    },
    {
      id: 2,
      img: img2,
      title: "How to get started on Airbnb",
      description: "From creating your listing to prepping your space, learn how to start hosting."
    },
    {
      id: 3,
      img: img3,
      title: "How to ern money on Airbnb",
      description: "Here's what every Host needs to know about pricing and payouts."
    },
    {
      id: 4,
      img: img4,
      title: "Design your place",
      description: "Designing your space for guests can be a quick way to boost your bookings."
    },
    {
      id: 5,
      img: img5,
      title: "Secrets from a seasoned Superhost",
      description: "Superhost Nikki shares her tips, from setting up to standing out."
    }
]

// carusel settings

 

    const NextArrow = ({onClick}) => {
    return (
      <div className='arrow-me arrow-right' onClick={onClick}>
          <FaArrowCircleRight />
      </div>
    )
    }
          
          
    const PrevArrow = ({onClick}) => {
    return (
      <div className='arrow-me arrow-left' onClick={onClick}>
        <FaArrowCircleLeft />
      </div>
    )
    }

const SmalCarusel = () => {
       // carusel settings
       const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow:
        <NextArrow />,
        prevArrow:
        <PrevArrow />,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 955,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
        };
  return (
    <div className='SmalCarusel'>
        <div className="container SmalCarusel-box">
            <Slider {...settings}>
            {
                data.map((item, index)=>(
                <div className={"allNight active"}>
                    <div className="slide-abdumajid">
                        <div className="carusel-slide">
                            <div className="carusel-img">
                                <img src={item.img} alt={item.nomi} />
                            </div>
                            <h2 className='title'>{item.title}</h2>
                            <p className='plart'>{item.description}</p>
                        </div>
                    </div>
                </div>
                ))
            }
            </Slider>
        </div>
    </div>
  )
}

export default SmalCarusel;


