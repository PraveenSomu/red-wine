import './shop.css'
import GoogleMapReact from 'google-map-react';
import img1 from '../images/shop/shop1.jpg'
import img2 from '../images/shop/shop2.jpg'
import img3 from '../images/shop/shop3.jpg'
import img4 from '../images/shop/shop4.jpg'
import img5 from '../images/shop/shop5.jpg'
import img6 from '../images/shop/shop6.jpg'
import img7 from '../images/shop/shop7.jpg'
import img8 from '../images/shop/shop8.jpg'

const Shop = () => {
  return (
    <div>
      <h1>shopbg</h1>
      <div id="shopbg">
        <h1>Our Shop!!</h1>
        <h6>Scroll</h6>
        <i class="fa fa-angle-double-down"></i>
        </div>
      <div class="head">
        <h3>---Views Of Our Angels---</h3>
      </div>

      <div id="shopcont" class="row mx-auto">

        <div id="shopbox" class="col-lg-3 mx-auto">
          <div>
            <img src={img1} alt="Café front View" />
            <h3>Café front View</h3>
            <p>I found them over pricey. Wish they make it up in taste.
            </p>
          </div>
        </div>

        <div id="shopbox" class="col-lg-3">
          <div>
            <img src={img2} alt="Outdoor View" />
            <h3>Outdoor View</h3>
            <p>Later when you move close to a mocktail counter, it give a nice French style Cafe looks.</p>
          </div>
        </div>

        <div id="shopbox" class="col-lg-3">
          <div>
            <img src={img3} alt="Outdoor View" />
            <h3>Outdoor View</h3>
            <p>The restaurant is in town. The place looks chick from outside</p>
          </div>
        </div>

        <div id="shopbox" class="col-lg-3">
          <div>
            <img src={img4} alt="Café Intirial View" />
            <h3>Café Intirial</h3>
            <p>They have simple interior decorations which gives it an elegant look.</p>
          </div>
        </div>

        <div id="shopbox" class="col-lg-3">
          <div>
            <img src={img5} alt="Dining Hall" />
            <h3>Dining Hall</h3>
            <p>Would like to go back to Erode just for The Red Wine Cafe.
            </p>
          </div>
        </div>

        <div id="shopbox" class="col-lg-3">
          <div>
            <img src={img6} alt="Our Kichen" />
            <h3>Our Kichen</h3>
            <p>Kichen was really good.Highly recommended for French food and also other cuisine.</p>
          </div>
        </div>

        <div id="shopbox" class="col-lg-3">
          <div>
            <img src={img8} alt="Parking" />
            <h3>Parking</h3>
            <p>The restaurant does not have it's own parking space or Valet parking.</p>
          </div>
        </div>
        <div id="shopbox" class="col-lg-3">
          <div>
            <img src={img7} alt="Restroom" />
            <h3>Restroom</h3>
            <p>Clean and Fresh Ever</p>
          </div>
        </div>
      </div>
      <div class="head">
        <h3>---Our Shop Location---</h3>
      </div>
      <div class="shopbox2">
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.795097190197!2d77.16904337356078!3d11.349671848361554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8e13e99efa4df%3A0x1388d6d970ff0868!2sPraveenkumar%20Home!5e0!3m2!1sen!2sin!4v1734948679825!5m2!1sen!2sin" width="600" height="450" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="head">
        <h3>---Contact For any Query---</h3>
      </div>
      <div id="shopcont1" class="container">
        <div class="shopbox1">
          <i class="fa fa-map-marker">   43,  Meel Street,  Gandhi nagar,  Punjai Puliampatti, Erode(dt), Pincode-638 459</i>
        </div>

        <div class="shopbox1">
          <i class="fa fa-phone">  9345751657 </i> <br />
        </div>

        <div class="shopbox1">
          <i class="fa fa-envelope">  praveensomu567 @gmail.com</i> <br />
        </div>

        <div class="shopbox1">
          <a class="fa fa-twitter " href="https://x.com/?lang=en"></a>
          <a id="insta" class="fa fa-instagram " href="https://www.instagram.com/santa_pyaar_praveenn?igsh=bjA4ankwem54bXg="></a>
          <a id="whts" class="fa fa-whatsapp" href="https://web.whatsapp.com/"></a>
        </div>
      </div>
      <a href="#" className='ibtn' ><i class="fa fa-angle-double-up"></i></a>
      <div className='myname'>
      <h6>Desinged & Developed By Praveenn Copyright &copy; &#8482; </h6>
      </div>




    </div>
  )
}

export default Shop;