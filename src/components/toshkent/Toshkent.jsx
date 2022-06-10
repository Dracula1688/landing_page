// CSS
import './toshkent.css'
// ICON
import {IoIosArrowDown} from 'react-icons/io'

const Toshkent = () => {
  return (
    <div className='toshkent'>
        <div className="container">
            <div className="toshkent_main">
                <p className='toshkent_main_p'>SEE FOR YOURSELF</p>
                <p className='toshkent_main_p1'>Host your <a href="#" className='toshkent_main_btn'>entire place <span className='icon'><IoIosArrowDown/></span> </a> </p>
                <p className='toshkent_main_p1'>for <a href="#" className='toshkent_main_btn'>4 guests <span className='icon'><IoIosArrowDown/></span> </a></p>
                <p className='toshkent_main_p1'>in <a href="#" className='toshkent_main_btn'>Tashkent <span className='icon'><IoIosArrowDown/></span> </a></p>
                <p className='toshkent_main_p1'>and earn up to <span className='span'>$87</span> a month*</p>
                <div className="toshkent_main_div">
                    <a href="#" className='hero_main_btn'>Get started</a>
                    <a href="#" className='carusel_me_text_p2 me_text_p2'>How we estimate your earnings potential</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Toshkent