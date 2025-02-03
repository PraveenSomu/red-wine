import './menu.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";


import img from '../images/Menu/menuchef.png'

import img1 from '../images/Menu/slider0.jpg'
import img2 from '../images/Menu/slider1.jpg'
import img3 from '../images/Menu/slider2.jpg'
import img4 from '../images/Menu/slider4.jpg'
import img5 from '../images/Menu/slider3.jpg'

import img6 from '../images/Menu/1 Beberages/1-hotchoco.jpg'
import img7 from '../images/Menu/1 Beberages/beverage2.jpg'
import img8 from '../images/Menu/1 Beberages/beverage3.jpg'
import img9 from '../images/Menu/1 Beberages/beverage4.jpg'
import img10 from '../images/Menu/1 Beberages/beverage5.jpg'
import img11 from '../images/Menu/1 Beberages/beverage6.jpg'
import img12 from '../images/Menu/1 Beberages/beverage7.jpg'
import img13 from '../images/Menu/1 Beberages/beverage8.jpg'
import img14 from '../images/Menu/1 Beberages/beverage9.jpg'
import img15 from '../images/Menu/1 Beberages/beverage10.jpg'

import coffee1 from '../images/Menu/2 Coffee/coffee1.jpg'
import coffee2 from '../images/Menu/2 Coffee/coffee2.jpg'
import coffee3 from '../images/Menu/2 Coffee/coffee3.jpg'
import coffee4 from '../images/Menu/2 Coffee/coffee4.jpg'
import coffee5 from '../images/Menu/2 Coffee/coffee5.jpg'
import coffee6 from '../images/Menu/2 Coffee/coffee6.jpg'
import coffee7 from '../images/Menu/2 Coffee/coffee7.jpg'
import coffee8 from '../images/Menu/2 Coffee/coffee8.jpg'
import coffee9 from '../images/Menu/2 Coffee/coffee9.jpg'
import coffee10 from '../images/Menu/2 Coffee/coffee10.jpg'
import coffee11 from '../images/Menu/2 Coffee/coffee11.jpg'
import coffee12 from '../images/Menu/2 Coffee/coffee12.jpg'
import coffee13 from '../images/Menu/2 Coffee/coffee13.jpg'
import coffee14 from '../images/Menu/2 Coffee/coffee14.jpg'
import coffee15 from '../images/Menu/2 Coffee/coffee15.jpg'
import coffee16 from '../images/Menu/2 Coffee/coffee16.jpg'
import coffee17 from '../images/Menu/2 Coffee/coffee17.jpg'
import coffee18 from '../images/Menu/2 Coffee/coffee18.jpg'
import coffee19 from '../images/Menu/2 Coffee/coffee19.jpg'
import coffee20 from '../images/Menu/2 Coffee/coffee20.jpg'

import juice1 from '../images/Menu/3 juice/juice1.jpg'
import juice2 from '../images/Menu/3 juice/juice2.jpg'
import juice3 from '../images/Menu/3 juice/juice3.jpg'
import juice4 from '../images/Menu/3 juice/juice4.jpg'
import juice5 from '../images/Menu/3 juice/juice5.jpg'
import juice6 from '../images/Menu/3 juice/juice6.jpg'
import juice7 from '../images/Menu/3 juice/juice7.jpg'
import juice8 from '../images/Menu/3 juice/juice8.jpg'
import juice9 from '../images/Menu/3 juice/juice9.jpg'
import juice10 from '../images/Menu/3 juice/juice10.jpg'
import juice11 from '../images/Menu/3 juice/juice11.jpg'
import juice12 from '../images/Menu/3 juice/juice12.jpg'
import juice13 from '../images/Menu/3 juice/juice13.jpg'
import juice14 from '../images/Menu/3 juice/juice14.jpg'
import juice15 from '../images/Menu/3 juice/juice15.jpg'

import falooda1 from '../images/Menu/4 falooda & brownies/falooda1.jpg'
import falooda2 from '../images/Menu/4 falooda & brownies/falooda2.jpg'
import falooda3 from '../images/Menu/4 falooda & brownies/falooda3.jpg'
import falooda4 from '../images/Menu/4 falooda & brownies/falooda4.jpg'
import falooda5 from '../images/Menu/4 falooda & brownies/falooda5.jpg'
import falooda6 from '../images/Menu/4 falooda & brownies/falooda6.jpg'
import falooda7 from '../images/Menu/4 falooda & brownies/falooda7.jpg'
import falooda8 from '../images/Menu/4 falooda & brownies/falooda8.jpg'
import falooda9 from '../images/Menu/4 falooda & brownies/falooda9.jpg'
import falooda10 from '../images/Menu/4 falooda & brownies/falooda10.jpg'
import falooda11 from '../images/Menu/4 falooda & brownies/falooda11.jpg'
import falooda12 from '../images/Menu/4 falooda & brownies/falooda12.jpg'

import icecream1 from '../images/Menu/5 Ice Cream/icecream1.jpg'
import icecream2 from '../images/Menu/5 Ice Cream/icecream2.jpg'
import icecream3 from '../images/Menu/5 Ice Cream/icecream3.jpg'
import icecream4 from '../images/Menu/5 Ice Cream/icecream4.jpg'
import icecream5 from '../images/Menu/5 Ice Cream/icecream5.jpg'
import icecream6 from '../images/Menu/5 Ice Cream/icecream6.jpg'
import icecream7 from '../images/Menu/5 Ice Cream/icecream7.jpg'
import icecream8 from '../images/Menu/5 Ice Cream/icecream8.jpg'
import icecream9 from '../images/Menu/5 Ice Cream/icecream9.jpg'
import icecream10 from '../images/Menu/5 Ice Cream/icecream10.jpg'
import icecream11 from '../images/Menu/5 Ice Cream/icecream11.jpg'
import icecream12 from '../images/Menu/5 Ice Cream/icecream12.jpg'
import icecream13 from '../images/Menu/5 Ice Cream/icecream13.jpg'
import icecream14 from '../images/Menu/5 Ice Cream/icecream14.jpg'
import icecream15 from '../images/Menu/5 Ice Cream/icecream15.jpg'

import milkshake1 from '../images/Menu/6 Milkshake/milkshake1.jpg'
import milkshake2 from '../images/Menu/6 Milkshake/milkshake2.jpg'
import milkshake3 from '../images/Menu/6 Milkshake/milkshake3.jpg'
import milkshake4 from '../images/Menu/6 Milkshake/milkshake4.jpg'
import milkshake5 from '../images/Menu/6 Milkshake/milkshake5.jpg'
import milkshake6 from '../images/Menu/6 Milkshake/milkshake6.jpg'
import milkshake7 from '../images/Menu/6 Milkshake/milkshake7.jpg'
import milkshake8 from '../images/Menu/6 Milkshake/milkshake8.jpg'
import milkshake9 from '../images/Menu/6 Milkshake/milkshake9.jpg'
import milkshake10 from '../images/Menu/6 Milkshake/milkshake10.jpg'
import milkshake11 from '../images/Menu/6 Milkshake/milkshake11.jpg'
import milkshake12 from '../images/Menu/6 Milkshake/milkshake12.jpg'
import milkshake13 from '../images/Menu/6 Milkshake/milkshake13.jpg'
import milkshake14 from '../images/Menu/6 Milkshake/milkshake14.jpg'
import milkshake15 from '../images/Menu/6 Milkshake/milkshake15.jpg'
import milkshake16 from '../images/Menu/6 Milkshake/milkshake16.jpg'
import milkshake17 from '../images/Menu/6 Milkshake/milkshake17.jpg'
import milkshake18 from '../images/Menu/6 Milkshake/milkshake18.jpg'
import milkshake19 from '../images/Menu/6 Milkshake/milkshake19.jpg'
import milkshake20 from '../images/Menu/6 Milkshake/milkshake20.jpg'

import pizza1 from '../images/Menu/7 non veg pizza/pizza1.jpg'
import pizza2 from '../images/Menu/7 non veg pizza/pizza2.jpg'
import pizza3 from '../images/Menu/7 non veg pizza/pizza3.webp'
import pizza4 from '../images/Menu/7 non veg pizza/pizza4.jpg'
import pizza5 from '../images/Menu/7 non veg pizza/pizza5.webp'
import pizza6 from '../images/Menu/7 non veg pizza/pizza6.png'
import pizza7 from '../images/Menu/7 non veg pizza/pizza7.webp'
import pizza8 from '../images/Menu/7 non veg pizza/pizza8.jpg'
import pizza9 from '../images/Menu/7 non veg pizza/pizza9.jpg'
import pizza10 from '../images/Menu/7 non veg pizza/pizza10.jpg'
import pizza11 from '../images/Menu/7 non veg pizza/pizza11.jpg'
import pizza12 from '../images/Menu/7 non veg pizza/pizza12.jpg'
import pizza13 from '../images/Menu/7 non veg pizza/pizza13.jpg'
import pizza14 from '../images/Menu/7 non veg pizza/pizza14.jpg'
import pizza15 from '../images/Menu/7 non veg pizza/pizza15.jpg'

import burger1 from '../images/Menu/8 Burger Non-Veg/burger1.jpg'
import burger2 from '../images/Menu/8 Burger Non-Veg/burger2.jpg'
import burger3 from '../images/Menu/8 Burger Non-Veg/burger3.jpg'
import burger4 from '../images/Menu/8 Burger Non-Veg/burger4.jpg'
import burger5 from '../images/Menu/8 Burger Non-Veg/burger5.jpg'
import burger6 from '../images/Menu/8 Burger Non-Veg/burger6.jpg'
import burger7 from '../images/Menu/8 Burger Non-Veg/burger7.jpg'
import burger8 from '../images/Menu/8 Burger Non-Veg/burger8.jpg'
import burger9 from '../images/Menu/8 Burger Non-Veg/burger9.jpg'
import burger10 from '../images/Menu/8 Burger Non-Veg/burger10.jpg'
import burger11 from '../images/Menu/8 Burger Non-Veg/burger11.jpg'
import burger12 from '../images/Menu/8 Burger Non-Veg/burger12.jpg'
import burger13 from '../images/Menu/8 Burger Non-Veg/burger13.jpg'
import burger14 from '../images/Menu/8 Burger Non-Veg/burger14.jpg'
import burger15 from '../images/Menu/8 Burger Non-Veg/burger15.jpg'

import hotdog1 from '../images/Menu/9 hot dog/hotdog1.jpg'
import hotdog2 from '../images/Menu/9 hot dog/hotdog2.jpg'
import hotdog3 from '../images/Menu/9 hot dog/hotdog3.jpg'
import hotdog4 from '../images/Menu/9 hot dog/hotdog4.jpg'
import hotdog5 from '../images/Menu/9 hot dog/hotdog5.jpg'
import hotdog6 from '../images/Menu/9 hot dog/hotdog6.jpg'

import bbq1 from '../images/Menu/10 BBQ/bbq1.jpg'
import bbq2 from '../images/Menu/10 BBQ/bbq2.jpg'
import bbq3 from '../images/Menu/10 BBQ/bbq3.jpg'
import bbq4 from '../images/Menu/10 BBQ/bbq4.jpg'
import bbq5 from '../images/Menu/10 BBQ/bbq5.jpg'
import bbq6 from '../images/Menu/10 BBQ/bbq6.jpg'
import bbq7 from '../images/Menu/10 BBQ/bbq7.jpg'
import bbq8 from '../images/Menu/10 BBQ/bbq8.jpg'
import bbq9 from '../images/Menu/10 BBQ/bbq9.jpg'
import bbq10 from '../images/Menu/10 BBQ/bbq10.jpg'
import bbq11 from '../images/Menu/10 BBQ/bbq11.jpg'

import kfc1 from '../images/Menu/11 KFC/kfc1.jpg'
import kfc2 from '../images/Menu/11 KFC/kfc2.jpg'
import kfc3 from '../images/Menu/11 KFC/kfc3.jpg'
import kfc4 from '../images/Menu/11 KFC/kfc4.jpg'
import kfc5 from '../images/Menu/11 KFC/kfc5.jpg'
import kfc6 from '../images/Menu/11 KFC/kfc6.jpg'

import non1 from '../images/Menu/12 non-veg crunch/non1.jpg'
import non2 from '../images/Menu/12 non-veg crunch/non2.jpg'
import non3 from '../images/Menu/12 non-veg crunch/non3.jpg'
import non4 from '../images/Menu/12 non-veg crunch/non4.jpg'
import non5 from '../images/Menu/12 non-veg crunch/non5.jpg'
import non6 from '../images/Menu/12 non-veg crunch/non6.jpg'
import non7 from '../images/Menu/12 non-veg crunch/non7.jpg'
import non8 from '../images/Menu/12 non-veg crunch/non8.jpg'
import non9 from '../images/Menu/12 non-veg crunch/non9.jpg'

import veg1 from '../images/Menu/13 vegBurger/br1.jpg'
import veg2 from '../images/Menu/13 vegBurger/br2.jpg'
import veg3 from '../images/Menu/13 vegBurger/br3.jpg'
import veg4 from '../images/Menu/13 vegBurger/br4.jpg'
import veg5 from '../images/Menu/13 vegBurger/br5.jpg'
import veg6 from '../images/Menu/13 vegBurger/br6.jpg'
import veg7 from '../images/Menu/13 vegBurger/br7.jpg'
import veg8 from '../images/Menu/13 vegBurger/br8.jpg'
import veg9 from '../images/Menu/13 vegBurger/br9.jpg'
import veg10 from '../images/Menu/13 vegBurger/br10.jpg'

import vpizza1 from '../images/Menu/14 veg Pizza/vpizza1.jpg'
import vpizza2 from '../images/Menu/14 veg Pizza/vpizza2.jpg'
import vpizza3 from '../images/Menu/14 veg Pizza/vpizza3.jpg'
import vpizza4 from '../images/Menu/14 veg Pizza/vpizza4.jpg'
import vpizza5 from '../images/Menu/14 veg Pizza/vpizza5.jpg'
import vpizza6 from '../images/Menu/14 veg Pizza/vpizza6.jpg'
import vpizza7 from '../images/Menu/14 veg Pizza/vpizza7.jpg'
import vpizza8 from '../images/Menu/14 veg Pizza/vpizza8.jpg'
import vpizza9 from '../images/Menu/14 veg Pizza/vpizza9.jpg'
import vpizza10 from '../images/Menu/14 veg Pizza/vpizza10.jpg'

import fried1 from '../images/Menu/15 Fries & Sides/fried1.jpg'
import fried2 from '../images/Menu/15 Fries & Sides/fried2.jpg'
import fried3 from '../images/Menu/15 Fries & Sides/fried3.jpg'
import fried4 from '../images/Menu/15 Fries & Sides/fried4.jpg'
import fried5 from '../images/Menu/15 Fries & Sides/fried5.jpg'
import fried6 from '../images/Menu/15 Fries & Sides/fried6.jpg'
import fried7 from '../images/Menu/15 Fries & Sides/fried7.jpg'
import fried8 from '../images/Menu/15 Fries & Sides/fried8.jpg'
import fried9 from '../images/Menu/15 Fries & Sides/fried9.jpg'
import fried10 from '../images/Menu/15 Fries & Sides/fried10.jpg'

import side1 from '../images/Menu/16 veg sides/side1.jpg'
import side2 from '../images/Menu/16 veg sides/side2.jpg'
import side3 from '../images/Menu/16 veg sides/side3.jpg'
import side4 from '../images/Menu/16 veg sides/side4.jpg'
import side5 from '../images/Menu/16 veg sides/side5.jpg'
import side6 from '../images/Menu/16 veg sides/side6.jpg'
import side7 from '../images/Menu/16 veg sides/side7.jpg'
import side8 from '../images/Menu/16 veg sides/side8.jpg'
import side9 from '../images/Menu/16 veg sides/side9.jpg'
import side10 from '../images/Menu/16 veg sides/side10.jpg'

import cake1 from '../images/Menu/18 Cake/cake1.jpg'
import cake2 from '../images/Menu/18 Cake/cake2.jpg'
import cake3 from '../images/Menu/18 Cake/cake3.jpg'
import cake4 from '../images/Menu/18 Cake/cake4.jpg'
import cake5 from '../images/Menu/18 Cake/cake5.jpg'
import cake6 from '../images/Menu/18 Cake/cake6.jpg'
import cake7 from '../images/Menu/18 Cake/cake7.jpg'
import cake8 from '../images/Menu/18 Cake/cake8.jpg'
import cake9 from '../images/Menu/18 Cake/cake9.jpg'
import cake10 from '../images/Menu/18 Cake/cake10.jpg'
import cake11 from '../images/Menu/18 Cake/cake11.jpg'
import cake12 from '../images/Menu/18 Cake/cake12.jpg'
import cake13 from '../images/Menu/18 Cake/cake13.jpg'
import cake14 from '../images/Menu/18 Cake/cake14.jpg'
import cake15 from '../images/Menu/18 Cake/cake15.jpg'
import cake16 from '../images/Menu/18 Cake/cake16.jpg'
import cake17 from '../images/Menu/18 Cake/cake17.jpg'
import cake18 from '../images/Menu/18 Cake/cake18.jpg'
import cake19 from '../images/Menu/18 Cake/cake19.jpg'
import cake20 from '../images/Menu/18 Cake/cake20.jpg'

import sand1 from '../images/Menu/17 Sandwich/sand1.jpg'
import sand2 from '../images/Menu/17 Sandwich/sand2.jpg'
import sand3 from '../images/Menu/17 Sandwich/sand3.jpg'
import sand4 from '../images/Menu/17 Sandwich/sand4.jpg'
import sand5 from '../images/Menu/17 Sandwich/sand5.jpg'
import sand6 from '../images/Menu/17 Sandwich/sand6.jpg'
import sand7 from '../images/Menu/17 Sandwich/sand7.jpg'
import sand8 from '../images/Menu/17 Sandwich/sand8.jpg'
import sand9 from '../images/Menu/17 Sandwich/sand9.jpg'
import sand10 from '../images/Menu/17 Sandwich/sand10.jpg'
import sand11 from '../images/Menu/17 Sandwich/sand11.jpg'
import sand12 from '../images/Menu/17 Sandwich/sand12.jpg'

import head1 from '../images/Menu/head1.png'
import head2 from '../images/Menu/head2.png'
import head3 from '../images/Menu/head3.png'
import head4 from '../images/Menu/head4.png'




const Menu = () => {

  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  }

  return (
    <>
      <div>
        <div id="menubg">
          <h1>Our Menu!!</h1>
          <h6>Scroll</h6>
          <i class="fa fa-angle-double-down"></i>
        </div>
        <div class="head">
          <img src={img} alt="chefmenu" />
        </div>


        <div className="first-img mx-auto">
          <div className="box1 mx-auto">
            <img src={img3} alt="" />
          </div>
          <div className="box1 mx-auto">
            <img src={img2} alt="" />
          </div>
          <div className="box1 mx-auto">
            <img src={img1} alt="" />
          </div>
          <div className="box1 mx-auto">
            <img src={img4} alt="" title='img4' />
          </div>
          <div className="box1 mx-auto">
            <img src={img5} alt="" />
          </div>
        </div>

        <div id='menulist' className="container">
          <div className="row">

            <div className="col-lg-3">
              <div id='menu2' className="menubox">
                <h5><img src={head1} alt="img" /> Beverages</h5>
                <ul className='menubtn'>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 1 ? 'nav-link active' : "nav-link"} onClick={() => handletab(1)}>Beverages</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 2 ? 'nav-link' : "nav-link"} onClick={() => handletab(2)}>Coffee</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 3 ? 'nav-link' : "nav-link"} onClick={() => handletab(3)}>Fresh Juice</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 4 ? 'nav-link' : "nav-link"} onClick={() => handletab(4)}>Falooda & Brownies</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 5 ? 'nav-link' : "nav-link"} onClick={() => handletab(5)}>Ice Cream</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 6 ? 'nav-link' : "nav-link"} onClick={() => handletab(6)}>Milkshake</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div id='menu' className="menubox">
                <h5><img src={head2} alt="img" />Non Veggies</h5>
                <ul className='menubtn'>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 7 ? 'nav-link' : "nav-link"} onClick={() => handletab(7)}>Non-Veg Pizza</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 8 ? 'nav-link' : "nav-link"} onClick={() => handletab(8)}>Non-Veg Burger</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 9 ? 'nav-link' : "nav-link"} onClick={() => handletab(9)}>Hotdog</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 10 ? 'nav-link' : "nav-link"} onClick={() => handletab(10)}>BBQ</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 11 ? 'nav-link' : "nav-link"} onClick={() => handletab(11)}>KFC</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 12 ? 'nav-link' : "nav-link"} onClick={() => handletab(12)}>Non-Veg Crunch</a></li>
                </ul>
              </div>
            </div>


            <div className="col-lg-3">
              <div id='menu1' className="menubox">
                <h5><img src={head3} alt="img" />Veggies</h5>
                <ul className='menubtn'>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 13 ? 'nav-link' : "nav-link"} onClick={() => handletab(13)}>Veg Burger</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 14 ? 'nav-link' : "nav-link"} onClick={() => handletab(14)}>Veg Pizza</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 15 ? 'nav-link' : "nav-link"} onClick={() => handletab(15)}>Fries-Sides</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 16 ? 'nav-link' : "nav-link"} onClick={() => handletab(16)}>Veg-Sides</a></li>
                </ul>
              </div>
            </div>



            <div className="col-lg-3">
              <div id='menu3' className="menubox">
                <h5><img src={head4} alt="img" />Breakfast</h5>
                <ul className='menubtn'>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 17 ? 'nav-link' : "nav-link"} onClick={() => handletab(17)}>Cake</a></li>
                  <li className='nav-item'><a href="#tabcont" className={showtab === 18 ? 'nav-link' : "nav-link"} onClick={() => handletab(18)}>Sandwich</a></li>
                </ul>
              </div>
            </div>
          </div>



        </div>

        <div className="tab-content" id='tabcont'>

          <div id='menucont2' className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"}>

            <div id='Menu-head' class="head">
              <h3>---Beverages---</h3>
            </div>

            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img cols ">
                <img src={img6} alt="Menu-Img" />
                <h4>hot chocolate</h4>
                <h4><FaRupeeSign /> 190 </h4>
              </div>

              <div className="menubox-img cols ">
                <img src={img7} alt="Menu-Img" />
                <h4>Strawberry banana smoothie</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
              <div className="menubox-img cols">
                <img src={img8} alt="Menu-Img" />
                <h4>mango pineapple smoothie</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols">
                <img src={img9} alt="Menu-Img" />
                <h4>frozon fanta blue</h4>
                <h4><FaRupeeSign /> 139 </h4>
              </div>
              <div className="menubox-img cols">
                <img src={img10} alt="Menu-Img" />
                <h4>frozon co-co-cola classic</h4>
                <h4><FaRupeeSign /> 79 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={img11} alt="Menu-Img" />
                <h4>dite coke</h4>
                <h4><FaRupeeSign /> 59 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={img12} alt="Menu-Img" />
                <h4>fanta orange</h4>
                <h4><FaRupeeSign /> 69 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={img13} alt="Menu-Img" />
                <h4>co-ca-cola</h4>
                <h4><FaRupeeSign /> 69 </h4>
              </div>
              <div className="menubox-img cols">
                <img src={img14} alt="Menu-Img" />
                <h4>sprite</h4>
                <h4><FaRupeeSign /> 69 </h4>
              </div>

              <div className="menubox-img cols">
                <img src={img15} alt="Menu-Img" />
                <h4>mirinda</h4>
                <h4><FaRupeeSign /> 69 </h4>
              </div>
            </div>
          </div>


          <div id='menucont2' className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"}>

            <div id='Menu-head' class="head">
              <h3>---Coffee---</h3>
            </div>

            <div className=" row menu-list-box1 mx-auto">

              <div className="menubox-img cols ">
                <img src={coffee1} alt="Menu-Img" />
                <h4>Caramel macchiato</h4>
                <h4><FaRupeeSign /> 190 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee2} alt="Menu-Img" />
                <h4>cappuccino</h4>
                <h4><FaRupeeSign /> 220 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee3} alt="Menu-Img" />
                <h4>caramel cappuccino</h4>
                <h4><FaRupeeSign /> 230 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee4} alt="Menu-Img" />
                <h4>french vanilla cappuccino</h4>
                <h4><FaRupeeSign /> 230 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee5} alt="Menu-Img" />
                <h4>americano</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee6} alt="Menu-Img" />
                <h4>premimum roast coffe</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee7} alt="Menu-Img" />
                <h4>ice caramel macchiato</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee8} alt="Menu-Img" />
                <h4>ice coffee</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee9} alt="Menu-Img" />
                <h4>latte</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee10} alt="Menu-Img" />
                <h4>ice french vanilla coffee</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee11} alt="Menu-Img" />
                <h4>caramel latte</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee12} alt="Menu-Img" />
                <h4>french vanilla latte</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee13} alt="Menu-Img" />
                <h4>black white coffee</h4>
                <h4><FaRupeeSign /> 100 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee14} alt="Menu-Img" />
                <h4>coffee white cream</h4>
                <h4><FaRupeeSign /> 170 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee15} alt="Menu-Img" />
                <h4>coffee cocoa</h4>
                <h4><FaRupeeSign /> 230 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee16} alt="Menu-Img" />
                <h4>chocolate coffee</h4>
                <h4><FaRupeeSign /> 230 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee17} alt="Menu-Img" />
                <h4>coffee with milk</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee18} alt="Menu-Img" />
                <h4>cold coffee</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee19} alt="Menu-Img" />
                <h4>fruit & nut cold coffee</h4>
                <h4><FaRupeeSign /> 180 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={coffee20} alt="Menu-Img" />
                <h4>vanilla late coffee</h4>
                <h4><FaRupeeSign /> 220 </h4>
              </div>
            </div>
          </div>


          <div id='menucont2' className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"}>

            <div id='Menu-head' class="head">
              <h3>---Fresh juice---</h3>
            </div>

            <div className=" row menu-list-box1 mx-auto">

              <div className="menubox-img cols ">
                <img src={juice1} alt="Menu-Img" />
                <h4>apple juice</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice2} alt="Menu-Img" />
                <h4>orange juice</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice3} alt="Menu-Img" />
                <h4>grape juice</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice4} alt="Menu-Img" />
                <h4>lemon juice</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice5} alt="Menu-Img" />
                <h4>pappaya juice</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice6} alt="Menu-Img" />
                <h4>carrot juice</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice7} alt="Menu-Img" />
                <h4>guva juice</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice8} alt="Menu-Img" />
                <h4>pomegranate juice</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice9} alt="Menu-Img" />
                <h4>mango juice</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice10} alt="Menu-Img" />
                <h4>pineapple juice</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice11} alt="Menu-Img" />
                <h4>watermelon juice</h4>
                <h4><FaRupeeSign /> 40 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice12} alt="Menu-Img" />
                <h4>kiwi </h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice13} alt="Menu-Img" />
                <h4>custard apple juice</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice14} alt="Menu-Img" />
                <h4>dragon fruit</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={juice15} alt="Menu-Img" />
                <h4>mint amla</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
            </div>
          </div>

          <div id='menucont2' className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"}>

            <div id='Menu-head' class="head">
              <h3>---falooda & brownie---</h3>
            </div>

            <div className=" row menu-list-box1 mx-auto">

              <div className="menubox-img cols ">
                <img src={falooda1} alt="Menu-Img" />
                <h4>Cherry Falooda</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda2} alt="Menu-Img" />
                <h4> double decker Falooda</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda3} alt="Menu-Img" />
                <h4> rayal Falooda</h4>
                <h4><FaRupeeSign /> 139 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda4} alt="Menu-Img" />
                <h4> rose Falooda</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda5} alt="Menu-Img" />
                <h4> elaneer Falooda</h4>
                <h4><FaRupeeSign /> 149 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda6} alt="Menu-Img" />
                <h4> bucket Falooda</h4>
                <h4><FaRupeeSign /> 199 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda7} alt="Menu-Img" />
                <h4> classic brownie</h4>
                <h4><FaRupeeSign /> 169 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda8} alt="Menu-Img" />
                <h4> crinkle top brownie</h4>
                <h4><FaRupeeSign /> 149 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda9} alt="Menu-Img" />
                <h4> chocochip brownie</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda10} alt="Menu-Img" />
                <h4> redvelvet brownie</h4>
                <h4><FaRupeeSign /> 189 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda11} alt="Menu-Img" />
                <h4> walnut brownie</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={falooda12} alt="Menu-Img" />
                <h4> oreo brownie</h4>
                <h4><FaRupeeSign /> 119 </h4>
              </div>
            </div>
          </div>

          <div id='menucont2' className={showtab === 5 ? "tab-pane fade show active" : "tab-pane fade"}>

          <div id='Menu-head' class="head">
            <h3>---ice cream---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">

              <div className="menubox-img cols ">
                <img src={icecream1} alt="Menu-Img" />
                <h4>vanilla iceCream</h4>
                <h4><FaRupeeSign /> 40 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream2} alt="Menu-Img" />
                <h4>strawberry iceCream</h4>
                <h4><FaRupeeSign /> 55 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream3} alt="Menu-Img" />
                <h4>plain pista iceCream</h4>
                <h4><FaRupeeSign /> 45 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream4} alt="Menu-Img" />
                <h4>butterscotch iceCream</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream5} alt="Menu-Img" />
                <h4>chocolate iceCream</h4>
                <h4><FaRupeeSign /> 65 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream6} alt="Menu-Img" />
                <h4>mango iceCream</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream7} alt="Menu-Img" />
                <h4> mixed furit iceCream</h4>
                <h4><FaRupeeSign /> 85 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream8} alt="Menu-Img" />
                <h4>blackcurrent iceCream</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream9} alt="Menu-Img" />
                <h4>caramel nuts iceCream</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream10} alt="Menu-Img" />
                <h4>muskmelon iceCream</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream11} alt="Menu-Img" />
                <h4>walnut mixed iceCream</h4>
                <h4><FaRupeeSign /> 75 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream12} alt="Menu-Img" />
                <h4> cranberry iceCream</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream13} alt="Menu-Img" />
                <h4>mixed furit sundae</h4>
                <h4><FaRupeeSign /> 55 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream14} alt="Menu-Img" />
                <h4>chocolate sundae</h4>
                <h4><FaRupeeSign /> 45 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={icecream15} alt="Menu-Img" />
                <h4>rainbow sundae</h4>
                <h4><FaRupeeSign /> 55 </h4>
              </div>
            </div>
          </div>

          <div id='menucont2' className={showtab === 6 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head' class="head">
            <h3>---Milk shake---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">

              <div className="menubox-img cols ">
                <img src={milkshake1} alt="Menu-Img" />
                <h4> apple Shake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake2} alt="Menu-Img" />
                <h4>muskmelon Shake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake3} alt="Menu-Img" />
                <h4>date Shake</h4>
                <h4><FaRupeeSign /> 100 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake4} alt="Menu-Img" />
                <h4>dry Shake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake5} alt="Menu-Img" />
                <h4>guva Shake</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake6} alt="Menu-Img" />
                <h4> almond Shake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake7} alt="Menu-Img" />
                <h4>vannila Shake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake8} alt="Menu-Img" />
                <h4>strawberry Shake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake9} alt="Menu-Img" />
                <h4>chocolate Shake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake10} alt="Menu-Img" />
                <h4>pista Shake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake11} alt="Menu-Img" />
                <h4>butterscotch Shake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake12} alt="Menu-Img" />
                <h4>black current Shake</h4>
                <h4><FaRupeeSign /> 120 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake13} alt="Menu-Img" />
                <h4>almond dry furit Shake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake14} alt="Menu-Img" />
                <h4>mixed dry furit Shake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake15} alt="Menu-Img" />
                <h4>oreo milkShake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake16} alt="Menu-Img" />
                <h4>kitket Shake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake17} alt="Menu-Img" />
                <h4>caramel Shake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake18} alt="Menu-Img" />
                <h4>choco boom Shake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake19} alt="Menu-Img" />
                <h4>blue berry Shake</h4>
                <h4><FaRupeeSign /> 120 </h4>
              </div>
              <div className="menubox-img cols ">
                <img src={milkshake20} alt="Menu-Img" />
                <h4>chocochip Shake</h4>
                <h4><FaRupeeSign /> 120 </h4>
              </div>


            </div>
          </div>

          <div id='menucont2' className={showtab === 7 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-nv' class="head">
            <h3>---Non Veg pizza---</h3>
          </div>
            <div className=" row menu-list-box mx-auto">
              <div className="menubox-img1 cols ">
                <img src={pizza1} alt="Menu-Img" />
                <h4>cheese golden delight pizza</h4>
                <h4><FaRupeeSign /> 255 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza2} alt="Menu-Img" />
                <h4>non-veg supreme pizza</h4>
                <h4><FaRupeeSign /> 295 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza3} alt="Menu-Img" />
                <h4>chicken dominator pizza</h4>
                <h4><FaRupeeSign /> 230 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza4} alt="Menu-Img" />
                <h4>pepper barbeqe & onion pizza</h4>
                <h4><FaRupeeSign /> 260 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza5} alt="Menu-Img" />
                <h4>pepper barbeqe chicken pizza</h4>
                <h4><FaRupeeSign /> 275 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza6} alt="Menu-Img" />
                <h4>chicken sausage pizza</h4>
                <h4><FaRupeeSign /> 220 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza7} alt="Menu-Img" />
                <h4>indian chicken tikka pizza</h4>
                <h4><FaRupeeSign /> 265 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza8} alt="Menu-Img" />
                <h4>chicken pepperanic pizza</h4>
                <h4><FaRupeeSign /> 235 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza9} alt="Menu-Img" />
                <h4>creamy tomato curry pizza</h4>
                <h4><FaRupeeSign /> 285 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza10} alt="Menu-Img" />
                <h4>keema do pizza</h4>
                <h4><FaRupeeSign /> 210 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza11} alt="Menu-Img" />
                <h4>spicey chicken pizza</h4>
                <h4><FaRupeeSign /> 270 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza12} alt="Menu-Img" />
                <h4>chicken pizza</h4>
                <h4><FaRupeeSign /> 235 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza13} alt="Menu-Img" />
                <h4>BBQ pizza </h4>
                <h4><FaRupeeSign /> 290 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza14} alt="Menu-Img" />
                <h4>couple pizza</h4>
                <h4><FaRupeeSign /> 220 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={pizza15} alt="Menu-Img" />
                <h4>chicken thanthoori pizza</h4>
                <h4><FaRupeeSign /> 270 </h4>
              </div>
            </div>
          </div>

          <div id='menucont2' className={showtab === 8 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-nv' class="head">
            <h3>---non-veg burger---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">

              <div className="menubox-img1 cols ">
                <img src={burger1} alt="Menu-Img" />
                <h4>chicken burger</h4>
                <h4><FaRupeeSign /> 199 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger2} alt="Menu-Img" />
                <h4>towered chicken burger</h4>
                <h4><FaRupeeSign /> 239 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger3} alt="Menu-Img" />
                <h4>caribbean spicy chicken burger</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger4} alt="Menu-Img" />
                <h4>maxican zinger pro burger</h4>
                <h4><FaRupeeSign /> 180 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger5} alt="Menu-Img" />
                <h4>american classic zinger burger</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger6} alt="Menu-Img" />
                <h4>indi thandoori zinger burger</h4>
                <h4><FaRupeeSign /> 190 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger7} alt="Menu-Img" />
                <h4>chicken zinger burger</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger8} alt="Menu-Img" />
                <h4>colonet chicken burger</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger9} alt="Menu-Img" />
                <h4>double down chicken burger</h4>
                <h4><FaRupeeSign /> 180 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger10} alt="Menu-Img" />
                <h4>orginal recipe burger</h4>
                <h4><FaRupeeSign /> 190 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger11} alt="Menu-Img" />
                <h4> BBQ burger</h4>
                <h4><FaRupeeSign /> 220</h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger12} alt="Menu-Img" />
                <h4>double tender burger</h4>
                <h4><FaRupeeSign /> 190 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger13} alt="Menu-Img" />
                <h4>hungry royal chicken burger</h4>
                <h4><FaRupeeSign /> 190 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger14} alt="Menu-Img" />
                <h4>KFC chicken burger</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={burger15} alt="Menu-Img" />
                <h4> McDonald's crispy chicken burger</h4>
                <h4><FaRupeeSign /> 190 </h4>
              </div>
            </div>
          </div>

          <div id='menucont2' className={showtab === 9 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-nv' class="head">
            <h3>---hot dog---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img1 cols ">
                <img src={hotdog1} alt="Menu-Img" />
                <h4>chilli hotdog</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={hotdog2} alt="Menu-Img" />
                <h4>potato cheese hotdog</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={hotdog3} alt="Menu-Img" />
                <h4>double cheese hotdog</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={hotdog4} alt="Menu-Img" />
                <h4> chicken tikka hotdog</h4>
                <h4><FaRupeeSign /> 120 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={hotdog5} alt="Menu-Img" />
                <h4>spical hotdog</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={hotdog6} alt="Menu-Img" />
                <h4>super hot sausage</h4>
                <h4><FaRupeeSign /> 120 </h4>
              </div>


            </div>
          </div>

          <div id='menucont2' className={showtab === 10 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-nv' class="head">
            <h3>---BBQ---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img1 cols ">
                <img src={bbq1} alt="Menu-Img" />
                <h4>spicy full grill</h4>
                <h4><FaRupeeSign /> 320 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={bbq2} alt="Menu-Img" />
                <h4> italic full grill</h4>
                <h4><FaRupeeSign /> 320 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={bbq3} alt="Menu-Img" />
                <h4>full lollipop </h4>
                <h4><FaRupeeSign /> 280 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={bbq4} alt="Menu-Img" />
                <h4>garlic full grill</h4>
                <h4><FaRupeeSign /> 280 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={bbq5} alt="Menu-Img" />
                <h4>onion spicy grill</h4>
                <h4><FaRupeeSign /> 280 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={bbq6} alt="Menu-Img" />
                <h4>maxican thanthoori grill</h4>
                <h4><FaRupeeSign />320 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={bbq7} alt="Menu-Img" />
                <h4> roasted thanthoori grill</h4>
                <h4><FaRupeeSign /> 320 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={bbq8} alt="Menu-Img" />
                <h4>pepper garlic grill</h4>
                <h4><FaRupeeSign /> 320 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={bbq9} alt="Menu-Img" />
                <h4> pepper roasted grill</h4>
                <h4><FaRupeeSign /> 280 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={bbq10} alt="Menu-Img" />
                <h4>sweet hot grill</h4>
                <h4><FaRupeeSign /> 280 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={bbq11} alt="Menu-Img" />
                <h4>veggie pepper grill</h4>
                <h4><FaRupeeSign /> 320 </h4>
              </div>
            </div>
          </div>

          <div id='menucont2' className={showtab === 11 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-nv' class="head">
            <h3>---KFC---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img1 cols ">
                <img src={kfc1} alt="Menu-Img" />
                <h4>KFC crispy chicken</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={kfc2} alt="Menu-Img" />
                <h4>KFC smokey red chicken</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={kfc3} alt="Menu-Img" />
                <h4>KFC periperi chicken</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={kfc4} alt="Menu-Img" />
                <h4>KFC mingless chicken</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={kfc5} alt="Menu-Img" />
                <h4>KFC chicken stripes</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={kfc6} alt="Menu-Img" />
                <h4>KFC ginger Tanthoori</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
            </div>
          </div>

          <div id='menucont2' className={showtab === 12 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-nv' class="head">
            <h3>---non-veg curnch---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img1 cols ">
                <img src={non1} alt="Menu-Img" />
                <h4>chicken finger</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={non2} alt="Menu-Img" />
                <h4>chicken nuggets</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={non3} alt="Menu-Img" />
                <h4>chicken bits</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={non4} alt="Menu-Img" />
                <h4>chicken garlic pop</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={non5} alt="Menu-Img" />
                <h4>chicken wings</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={non6} alt="Menu-Img" />
                <h4>chicken pop</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={non7} alt="Menu-Img" />
                <h4>butter chicken</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={non8} alt="Menu-Img" />
                <h4>mutton curry</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img1 cols ">
                <img src={non9} alt="Menu-Img" />
                <h4>chicken chilli</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
            </div>
          </div>

          <div id='menucont2' className={showtab === 13 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-vg' class="head">
            <h3>---veg Burger---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img2 cols ">
                <img src={veg1} alt="Menu-Img" />
                <h4>cheese burger</h4>
                <h4><FaRupeeSign /> 179 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={veg2} alt="Menu-Img" />
                <h4>double cheese burger</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={veg3} alt="Menu-Img" />
                <h4>crunch veg burger</h4>
                <h4><FaRupeeSign /> 145 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={veg4} alt="Menu-Img" />
                <h4>cafe spl burger</h4>
                <h4><FaRupeeSign /> 180 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={veg5} alt="Menu-Img" />
                <h4>paneer spicey burger</h4>
                <h4><FaRupeeSign /> 130 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={veg6} alt="Menu-Img" />
                <h4>double party veggie</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={veg7} alt="Menu-Img" />
                <h4>classic veg burger</h4>
                <h4><FaRupeeSign /> 130 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={veg8} alt="Menu-Img" />
                <h4>onion crispy cheese burger</h4>
                <h4><FaRupeeSign /> 150 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={veg9} alt="Menu-Img" />
                <h4>hot masala burger</h4>
                <h4><FaRupeeSign /> 120 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={veg10} alt="Menu-Img" />
                <h4>tikka cheese burger</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
            </div>
          </div>

          <div id='menucont2' className={showtab === 14 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-vg' class="head">
            <h3>---veg pizza---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img2 cols ">
                <img src={vpizza1} alt="Menu-Img" />
                <h4>cheese peppy paneer pizza</h4>
                <h4><FaRupeeSign /> 250 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={vpizza2} alt="Menu-Img" />
                <h4>cheese valcano farmhouse pizza</h4>
                <h4><FaRupeeSign /> 160 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={vpizza3} alt="Menu-Img" />
                <h4>corn & cheese pizza</h4>
                <h4><FaRupeeSign /> 175 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={vpizza4} alt="Menu-Img" />
                <h4>margherita pizza</h4>
                <h4><FaRupeeSign /> 199 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={vpizza5} alt="Menu-Img" />
                <h4>peppy paneer pizza</h4>
                <h4><FaRupeeSign /> 260 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={vpizza6} alt="Menu-Img" />
                <h4>veggie paradise pizza</h4>
                <h4><FaRupeeSign /> 210 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={vpizza7} alt="Menu-Img" />
                <h4> indi thandoori paneerpizza</h4>
                <h4><FaRupeeSign /> 245 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={vpizza8} alt="Menu-Img" />
                <h4>double cheese margherita pizza</h4>
                <h4><FaRupeeSign /> 275 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={vpizza9} alt="Menu-Img" />
                <h4>mexican green wave pizza</h4>
                <h4><FaRupeeSign /> 230 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={vpizza10} alt="Menu-Img" />
                <h4>cheese overload pizza</h4>
                <h4><FaRupeeSign /> 265 </h4>
              </div>


            </div>
          </div>

          <div id='menucont2' className={showtab === 15 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-vg' class="head">
            <h3>---frieds & sides---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img2 cols ">
                <img src={fried1} alt="Menu-Img" />
                <h4>world famous fries</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={fried2} alt="Menu-Img" />
                <h4>apple slices</h4>
                <h4><FaRupeeSign /> 30 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={fried3} alt="Menu-Img" />
                <h4>tangy barbeque sauce</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={fried4} alt="Menu-Img" />
                <h4>spicy buffalo sauce</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={fried5} alt="Menu-Img" />
                <h4>creamy ranch sauce</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={fried6} alt="Menu-Img" />
                <h4>honey mustard sauce</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={fried7} alt="Menu-Img" />
                <h4>honey</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={fried8} alt="Menu-Img" />
                <h4>sweet n sour sauce</h4>
                <h4><FaRupeeSign /> 30 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={fried9} alt="Menu-Img" />
                <h4>ketchup packet</h4>
                <h4><FaRupeeSign /> 10 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={fried10} alt="Menu-Img" />
                <h4>mayonnaise</h4>
                <h4><FaRupeeSign /> 10 </h4>
              </div>


            </div>
          </div>

          <div id='menucont2' className={showtab === 16 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-vg' class="head">
            <h3>---veg sides---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img2 cols ">
                <img src={side1} alt="Menu-Img" />
                <h4>paneer chilli</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={side2} alt="Menu-Img" />
                <h4>gobi manjurian </h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={side3} alt="Menu-Img" />
                <h4>musroom butter masala</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={side4} alt="Menu-Img" />
                <h4>veg 65 masala</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={side5} alt="Menu-Img" />
                <h4>veg pakkoda</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={side6} alt="Menu-Img" />
                <h4>bread allva</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={side7} alt="Menu-Img" />
                <h4>babycone chinthamani</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={side8} alt="Menu-Img" />
                <h4>mushroom chinthamani</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={side9} alt="Menu-Img" />
                <h4>babycorn chilli</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>
              <div className="menubox-img2 cols ">
                <img src={side10} alt="Menu-Img" />
                <h4>finger chips</h4>
                <h4><FaRupeeSign /> 50 </h4>
              </div>


            </div>
          </div>

          <div id='menucont2' className={showtab === 17 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-bf' class="head">
            <h3>---cake---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img3 cols ">
                <img src={cake1} alt="Menu-Img" />
                <h4>pineapple cake</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake2} alt="Menu-Img" />
                <h4>choco cake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake3} alt="Menu-Img" />
                <h4>black forest cake</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake4} alt="Menu-Img" />
                <h4>white forest cake</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake5} alt="Menu-Img" />
                <h4> red velvet cake</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake6} alt="Menu-Img" />
                <h4> mix fruit cake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake7} alt="Menu-Img" />
                <h4>mango premium cake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake8} alt="Menu-Img" />
                <h4>chocolate truffle cake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake9} alt="Menu-Img" />
                <h4>furit cake</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake10} alt="Menu-Img" />
                <h4>butter cake</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake11} alt="Menu-Img" />
                <h4>blue berry cake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake12} alt="Menu-Img" />
                <h4>belgium chocolate cake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake13} alt="Menu-Img" />
                <h4> rose flavor cake</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake14} alt="Menu-Img" />
                <h4>couple cake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake15} alt="Menu-Img" />
                <h4>barbie doll cake</h4>
                <h4><FaRupeeSign /> 170 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake16} alt="Menu-Img" />
                <h4>dates cake</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake17} alt="Menu-Img" />
                <h4>oreo cake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake18} alt="Menu-Img" />
                <h4>choco boom cake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake19} alt="Menu-Img" />
                <h4>choco cookie cake</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={cake20} alt="Menu-Img" />
                <h4>hot double chocolate cake</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>


            </div>
          </div>

          <div id='menucont2' className={showtab === 18 ? "tab-pane fade show active" : "tab-pane fade"}>
          <div id='Menu-head-bf' class="head">
            <h3>---sandwiches---</h3>
          </div>
            <div className=" row menu-list-box1 mx-auto">
              <div className="menubox-img3 cols ">
                <img src={sand1} alt="Menu-Img" />
                <h4>veg with cheese sandwich</h4>
                <h4><FaRupeeSign /> 60 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand2} alt="Menu-Img" />
                <h4>paneer with cheese sandwich</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand3} alt="Menu-Img" />
                <h4>spl chicken club sandwich</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand4} alt="Menu-Img" />
                <h4>baby cone sandwich</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand5} alt="Menu-Img" />
                <h4>paneer sandwich</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand6} alt="Menu-Img" />
                <h4>mushroom sandwich</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand7} alt="Menu-Img" />
                <h4>BBQ sandwich</h4>
                <h4><FaRupeeSign /> 80 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand8} alt="Menu-Img" />
                <h4>chicken nuggets sandwich</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand9} alt="Menu-Img" />
                <h4>BBY egg chicken sandwich</h4>
                <h4><FaRupeeSign /> 90 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand10} alt="Menu-Img" />
                <h4>cheese with chicken sandwich</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand11} alt="Menu-Img" />
                <h4>green chicken jumbo sandwich</h4>
                <h4><FaRupeeSign /> 110 </h4>
              </div>
              <div className="menubox-img3 cols ">
                <img src={sand12} alt="Menu-Img" />
                <h4>egg sandwich</h4>
                <h4><FaRupeeSign /> 70 </h4>
              </div>
            </div>
          </div>

        </div>

        <div id="aboutcont8" class="row">
          <div id="aboutcont9" class="col-sm-4 container">
            <h3>Company !!...</h3>
            <ul>
              <Link to="/"><li><MdKeyboardDoubleArrowLeft />Home</li></Link>
              <Link to="/about"><li><MdKeyboardDoubleArrowLeft />About</li></Link>
              <Link to="/shop"><li><MdKeyboardDoubleArrowLeft />Shop</li></Link>
              <Link to="/events"><li><MdKeyboardDoubleArrowLeft />Event</li></Link>
              <Link to="/menu"><li><MdKeyboardDoubleArrowLeft />Menu</li></Link>
              <Link to="/reservation"><li><MdKeyboardDoubleArrowLeft />Reservation</li></Link>
            </ul>
          </div>
          <div id="aboutcont10" class="col-sm-4 container">
            <h3>Contact !!...</h3>
            <i class="fa fa-map-marker">   43,  Meel Street,  Gandhi nagar,  Punjai Puliampatti, Erode(dt), Pincode-638 459</i>
            <i class="fa fa-phone">  9345751657 </i> <br />
            <i class="fa fa-envelope">  praveensomu567@gmail.com</i> <br />
            <a class="fa fa-twitter" href="https://x.com/?lang=en"></a>
            <a class="fa fa-instagram" href="https://www.instagram.com/santa_pyaar_praveenn?igsh=bjA4ankwem54bXg="></a>
            <a class="fa fa-whatsapp" href="https://web.whatsapp.com/"></a>
          </div>
          <div id="aboutcont11" class="col-sm-4 container">
            <h3>Opening !!...</h3>
            <h5> Monday to Sunday..</h5>
            <h5> 11am - 11pm </h5>
          </div>
        </div>






        <a href="#" className='ibtn' id='top-btn'><i class="fa fa-angle-double-up"></i></a>
        <a href="#menulist" className='ibtn' id='menu-btn'>Menu</a>
        <div className='myname'>
          <h6>Desinged & Developed By Praveenn Copyright &copy; &#8482; </h6>
        </div>






      </div>
    </>
  )
}

export default Menu;