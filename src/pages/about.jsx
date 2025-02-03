import './about.css'
import { Link } from 'react-router-dom';
import img from '../images/about/about1.jpg';
import img1 from '../images/about/about2.jpg';
import img2 from '../images/about/about3.jpg';
import img3 from '../images/about/about4.jpg';
import img4 from '../images/about/about5.jpg';
import img5 from '../images/about/about6.jpg';
import img6 from '../images/about/about7.jpg';
import img7 from '../images/about/about8.jpg';
import img8 from '../images/about/aboutcert1.jpg';
import img9 from '../images/about/aboutcert2.jpg';

import img10 from '../images/about/aboutcert3.png';
import img11 from '../images/about/aboutcert4.jpg';
import img12 from '../images/about/aboutcert5.jpg';
import img13 from '../images/about/aboutcert6.jpg';

import img14 from '../images/about/aboutcert7.jpg';
import img15 from '../images/about/aboutcert8.jpg';
import img16 from '../images/about/aboutcert9.jpg';
import img17 from '../images/about/aboutcert10.jpg';
import img18 from '../images/about/aboutcert011.jpeg';

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


function About() {
    return (
        <>
            <div>
                
                    <div id="aboutbg">
                        <h1>About Us!!</h1>
                        <h6>Scroll</h6>
                        <i class="fa fa-angle-double-down"></i>
                    </div>
                <div class="row">

                    <div class="col-lg-6 bg-warning">
                        <div className="imgbox container">
                            <div id="aboutcont" class="row row-cols-2">
                                <div id="content1" class="container col">
                                    <img src={img} alt="content1" />
                                </div>
                                <div id="content2" class="container col">
                                    <img src={img1} alt="content1" />
                                </div>
                                <div id="content3" class="container col">
                                    <img src={img2} alt="content1" />
                                </div>
                                <div id="content4" class="container col">
                                    <img src={img7} alt="content1" />
                                </div>
                            </div>
                        </div>

                        <div className="imgbox1">
                            <div id="aboutcont" class="row row-cols-2">
                                <div id="content1" class="container col">
                                    <img src={img4} alt="content1" />
                                </div>
                                <div id="content2" class="container col">
                                    <img src={img5} alt="content1" />
                                </div>
                                <div id="content3" class="container col">
                                    <img src={img6} alt="content1" />
                                </div>
                                <div id="content4" class="container col">
                                    <img src={img3} alt="content1" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-6 bg-danger ">
                        <div id="aboutcont1" class="row row-cols">

                            <h2 class="text-warning">About us !! —</h2> <hr />
                            <h1>Welcome to Red Ẃine Café </h1>

                            <h5 class="text-warning">OUR VISION :</h5>
                            <p>Provide solutions to everyday appetite needs with simple ingredients.</p>
                            <h5 class="text-warning">OUR MISSION :</h5>
                            <p>Find a perfect balance between food taste and quality through continuous research and development.</p>
                            <h5 class="text-warning">OUR CORE VALUES :</h5>
                            <p id="para1">Employee First: All management decisions are taken putting forth the employee's wellbeing as our first priority. <br />
                                Integrity: We demonstrate sound moral and ethical principles and do the right thing, no matter who is watching. <br />
                                Responsibility: We believe that our actions impact our customers and in turn the society. Hence we are careful in the choices we make.</p>

                            <div id="aboutcont2" class="row row-cols-2">
                                <div class="bigbox1 col">
                                    <div class="box1"><img src={img8} alt="aboutcert1" /> <h3>Top 10 Restaurant in Erode</h3></div>
                                </div>

                                <div class="bigbox2 col">
                                    <div class="box2"><img src={img9} alt="aboutcert1" /><h3>Excellent Desserts in Erode</h3></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="aboutcont3" class="row row-cols">
                    <img id="img1" src={img10} alt="aboutcert" />
                    <img id="img1" src={img11} alt="aboutcert" />
                    <img src={img12} alt="aboutcert" />
                    <img src={img13} alt="aboutcert" />
                    <ul>
                        <li><p>implementing a new marketing strategy that increased sales by a significant percentage</p></li>
                        <li><p>growing customer bases and increasing engagement on social media platforms within a specific period</p></li>
                        <li><p>completing a significant number of assignments or tasks successfully over a specific period, such as writing and publishing over 100 articles in three months</p></li>
                    </ul>
                </div>
                <div id="aboutcont4" class="row row-cols">
                    <img id="img2" src={img14} alt="aboutcert" />
                    <img id="img2" src={img15} alt="aboutcert" />
                    <img src={img16} alt="aboutcert" />
                    <img src={img17} alt="aboutcert" />
                    <ul>
                        <li><p>innovating a new food and beverage menu that received praise from several customers</p></li>
                        <li><p>designing a company app that automates tasks, increasing efficiency</p></li>
                        <li><p>establishing a mentorship programme to increase collaboration, reduce external training costs and improve the production of high-quality work</p></li>
                        <li><p>planning and organising team schedules months in advance for pending projects</p></li>
                    </ul>
                </div>
                <div id="aboutcont5" class="row container text-dark mx-auto">
                    <div class="col-sm-6">
                        <div id="aboutcont6" class="row row-cols container">
                            <img src={img18} alt="Aboutcert" />
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div id="aboutcont7" class="row row-cols container">
                            <h4 class="text-warning">SME Business of the Year Award Winner 2023</h4>
                            <p>Their Vision is to provide solutions to everyday appetite needs using simple ingredients. Its Good to say that coined the name  of  the <span>“ RED WINE CAFE” </span> to ensure that people have a memorable dining experience that goes just beyond the consumption of food. People choose them to celebrate their special occasions like birthdays, anniversaries, and bride-to-be ceremonies. They ensure that they create an experience that becomes a lifetime memory for them by providing excellent hospitality. They offer the following cuisines in Erode - Italian, Continental, Malabar, Tandoor, Chinese, and Indian. They serve the best Malabar Cuisine by choosing ingredients that offer excellent flavour and aroma. Their biggest strength has been their sourcing. They bring the ingredients from across the globe to offer the best value to their guests.</p>
                            <h6>Unique Selling Proposition / Competitive Advantage:</h6>
                            <p>They offer gut-friendly food that doesn’t hurt the stomach through the usage of simple and less processed ingredients.</p>
                            <h6>Achievements and milestones of the company:</h6>
                            <p>They have been consecutively awarded as Restaurants serving the best desserts in Erode in the years 2022, 2023, and 2024 by Restaurant Guru (A restaurant discovery platform).</p>
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
                <a href="#" className='ibtn' ><i class="fa fa-angle-double-up"></i></a>
      <div className='myname'>
      <h6>Desinged & Developed By Praveenn Copyright &copy; &#8482; </h6>

      </div>


            </div>
        </>
    );
};
export default About;