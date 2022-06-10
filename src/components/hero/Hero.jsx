// CSS
import './hero.css'

// IMG
import img from '../../images/hero-img/img.png'

const Hero = () => {
  return (
    <div className='hero'>
                <a href='https://www.airbnb.com/' className="hero_main_img">
                    <img src={img} alt="" />
                </a>
        <div className="container">
            <div className="hero_main"  data-aos-anchor-placement="top-center" data-aos="fade-up">
                <p className='hero_main_p'>BECOME A  HOST</p>
                <p className='hero_main_p1'>Host your space, share your world</p>
                <p className='hero_main_p2'>The art of hosting is rooted in thoughtful design. Share your unique aesthetic with guests and earn extra income on a schedule that works for you.</p>
                <a href="#" className='hero_main_btn'>Try hosting</a>
            </div>
        </div>
    </div>
  )
}



export default Hero;