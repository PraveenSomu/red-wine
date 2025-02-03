import React from 'react'
import './home.css'
import img from '../images/box5.jpg'
import img1 from '../images/box6.jpg'
import img2 from '../images/box7.jpg'
import { Link } from 'react-router-dom';


const Frontpage = () => {
  return (
    <div className='homeall'>
      <div id="bkg" >
        <div id="home" className="container">
          <h3>──── hello, new friend!!.✦</h3>
          <h1 className='text-light'>welcome to <br /> our red wine <br /> café<span>!</span></h1>
          <p>"Food is art, and food is love. And we should show love and appreciation for those who cook it by eating it with relish."</p>
        </div>
      </div>

      <div id="homecont1" className="row">
        <div className='col-lg-3'>
          <div class="box1">
            <i class="fa fa-user-secret"></i>
            <h3>Master Chefs</h3>
            <p>Our talented chefs are passionate about creating delicious and innovative dishes that will tantalize your taste buds and leave you wanting for more.</p>
          </div>
        </div>

        <div className='col-lg-3'>
          <div class="box2">
            <i class="fa fa-coffee"></i>
            <h3>Quality Food</h3>
            <p>We work tirelessly to source only the finest ingredients and are committed to creating dishes that highlight the natural flavors and textures of each ingredient.</p>
          </div>
        </div>

        <div className='col-lg-3'>
          <div class="box3">
            <i class="fa fa-shopping-cart"></i>
            <h3>Online Orders</h3>
            <p>We deliver across erode via Swiggy & Zomato. You are just a click away from discovering your new favorite dish!.</p>
          </div>
        </div>

        <div className='col-lg-3'>
          <div class="box4">
            <i class="fa fa-globe"></i>
            <h3>Online Booking</h3>
            <p>We recommend booking a table in advance to ensure availability.</p>
            <Link to="/reservation"><button id="btn2" className='btn'>Book Table</button></Link>
          </div>
        </div>

      </div>

      <div class="head">
        <h3>---Red  Wine  Café!!---</h3>
        <h2>Why Choose Us..?</h2>
      </div>
      <div id="homecont2" class="row">
        <div id="box5" class="col-lg-4">
          <div>
            <img src={img} alt="Candle Light Dinner" />
            <h3>Candle Light Dinner</h3>
            <p>We offer romantic candle light dining experience with an ambiance that is serene, cozy, and often accompanied by specific music on request. The dim lighting and the flickering of the candles create a warm and relaxing atmosphere, perfect for intimate conversations and special moments. It is a popular choice for couples celebrating special occasions such as anniversaries, Valentine's Day, or simply as a romantic night out.</p>
          </div>
        </div>

        <div id="box5" class="col-lg-4">
          <div>
            <img src={img1} alt="Value Proposition" />
            <h3>Value Proposition</h3>
            <p>For families with diverse taste, the variety in our menu offers something for everyone. <br />
              We don't use food colors and artificial flavor enhancers. <br />
              Finally, you will have something new to try on your every visit and that's our promise.</p>
          </div>
        </div>

        <div id="box5" class="col-lg-4">
          <div>
            <img src={img2} alt="Birthday Party" />

            <h3>Birthday Party</h3>
            <p>From Corporate Meetings to life’s important moments like Birthday Parties, Bride-to-Be Celebrations, Get-Together Functions and Farewell Parties, we got you covered. We are open for customization of the menu, cake and decorations, to create a birthday celebration that is unique and personalized. Your special moments deserve a special venue. Choose your way.</p>
          </div>
        </div>

      </div>
      <div class="head">
        <h3>---Reviews Time---</h3>
        <h2>Our People Say!!</h2>
      </div>

      <div id="homecont3" className="container col-lg-12">
        <div class="box8">
          <i id="name1" class="fa fa-heart"><span >Sumithra Praveenkumar...</span></i>
          <p>** HIGHLY RECOMMENDED **
            Best fine dine restaurant in Erode with greater ambiance.. the food served here are
            delicious and unique recipe type menu. Can't get such a better option to dine in with family
            at Erode. Ample parking space with a hall facility in the first floor. Overall, highly
            recommend for family and kids. Especially new wed couples will love it.
          </p>
        </div>

        <div class="box8">
          <i id="name2" class="fa fa-magic"><span>Megha Akash...</span></i>
          <p>A classy and aesthetically pleasing restaurant/hangout space , probably one of the
            finest in
            Erode. Really good food - you get to sample a variety of cuisines. I didn’t feel bloated
            even after a heavy dinner here - proof that they choose good ingredients to make their food.
            Surprisingly light on the wallet for the quality of the dishes served.. 👍
          </p>
        </div>

        <div class="box8">
          <i id="name1" class="fa fa-paw"><span >Dulquer Salmaan...</span></i>
          <p>It was such a wonderful restaurant ever in Erode. The ambience scores everything.
            The
            hospitality of the staff was too good. Obviously the taste is extraordinary. The one I like
            the most here is tandoori chicken. They start making it once after the order is given unlike
            in other restaurant it was..
            previously half cookedThey have separatemaster for tandoori who
            was from Malasiya. I’ve visited more than 6 times in 2 months. It’s a must visit restaurant
            for foodies and obviously everyone out there who’s checking for something new in the city.</p>
        </div>

        <div class="box8">
          <i id="name2" class="fa fa-bolt"><span >Silambarasan TR...</span></i>
          <p>It’s a great experience. The ambiance is very welcoming and charming (especially on
            last
            valentine day) The food is absolutely amazing – everything we tasted melted in other mouths
            (our Favourite illaneer Paayasam) Thank you one fine day the must visit restaurant.</p>
        </div>
      </div>


      <div class="head">
        <h3>ThankYou..!!</h3>
        <h2>For visiting...</h2>
      </div>
      <a href="#" className='ibtn' ><i class="fa fa-angle-double-up"></i></a>
      <div className='myname'>
      <h6>Desinged & Developed By Praveenn Copyright &copy; &#8482; </h6>

      </div>


      


    </div>
  )
}

export default Frontpage;