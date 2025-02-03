import React from 'react'
import './reservation.css'


import img1 from '../images/resarvation/table1.jpg'
import img2 from '../images/resarvation/table2.jpg'
import img3 from '../images/resarvation/table3.jpg'
import img4 from '../images/resarvation/table4.jpg'
import img5 from '../images/resarvation/table5.jpg'
import img6 from '../images/resarvation/table6.jpg'

const Reservation = () => {

    return (
        <div>
            <div id="resbg">
                <h2>Welcome Our Café!!</h2>
                <h6>Scroll</h6>
                <i class="fa fa-angle-double-down"></i>
            </div>
            <div class="head">
                <h3>--Choose Your Lovely Table--</h3>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="resbox">
                        <img src={img1} alt="table1" />
                        <h2>Table_01</h2>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="resbox">
                        <img src={img2} alt="table1" />
                        <h2>Table_02</h2>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="resbox">
                        <img src={img3} alt="table1" />
                        <h2>Table_03</h2>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="resbox">
                        <img src={img4} alt="table1" />
                        <h2>Table_04</h2>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="resbox">
                        <img src={img5} alt="table1" />
                        <h2>Table_05</h2>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="resbox">
                        <img src={img6} alt="table1" />
                        <h2>Table_06</h2>
                    </div>
                </div>

            </div>

            <div class="head">
                <h3>--Book Your Table--</h3>
            </div>
            <div class="row">

                <div class="col-lg-6">
                    <div class="slider-container">

                        <div className="slider1">
                            <img src={img1} alt="" />
                            <h3>Table_01</h3>
                        </div>

                        <div className="slider2">
                            <img src={img2} alt="" />
                            <h3>Table_02</h3>
                        </div>

                        <div className="slider3">
                            <img src={img3} alt="" />
                            <h3>Table_03</h3>
                        </div>

                        <div className="slider3">
                            <img src={img4} alt="" />
                            <h3>Table_04</h3>
                        </div>

                        <div className="slider2">
                            <img src={img5} alt="" />
                            <h3>Table_05</h3>
                        </div>

                        <div className="slider1">
                            <img src={img6} alt="" />
                            <h3>Table_06</h3>
                        </div>
            
                    </div>

                </div>
                <div id="rescont1" class="col-lg-6">
                    <div class="login">
                        <form action="" class="was-validated">
                            <h2>Book a Table !!</h2>
                            <div class="row row-cols-2">

                                <div id="box1" class="col">
                                    <input id="input0" type="text" name="Fullname" required />
                                    <span></span>
                                    <label for="text">Full Name</label>
                                    <p id="para0"></p>
                                </div>

                                <div id="box1" class="col">
                                    <input id="input1" type="text" name="Whatsappnumber" required />
                                    <span></span>
                                    <label for="text">WhatsApp Number</label>
                                    <p id="para1"></p>
                                </div>

                                <div id="box1" class="col">
                                    <input id="input2" type="date" name="Date" required />
                                    <span></span>
                                    <label for="date">Date</label>
                                    <p id="para2"></p>
                                </div>

                                <div id="box1" class="col">
                                    <input id="input3" type="time" name="Time" required />
                                    <span></span>
                                    <label for="Time">Time</label>
                                    <p id="para3"></p>
                                </div>

                                <div id="box1" class="col">
                                    <input id="input4" type="text" name="Table no" required />
                                    <span></span>
                                    <label for="text">Table No</label>
                                    <p id="para4"></p>
                                </div>

                                <div id="box1" class="col">
                                    <input id="input5" type="text" name="Person" required />
                                    <span></span>
                                    <label for="text">Number of People</label>
                                    <p id="para5"></p>
                                </div>
                            </div>

                            <div id="box1" class="col">
                                <input id="input6" type="text" name="email" required />
                                <span id="spn1"></span>
                                <label for="text">Email</label>
                                <p id="para6"></p>
                            </div>
                            <div id="box1" class="col">
                                <input id="input7" type="text" name="special" required />
                                <span id="spn1"></span>
                                <label for="text">Special Request..</label>
                                <p id="para7"></p>
                            </div>
                            <input type="submit" value="Book Table" name="btn" class="btn2" />
                        </form>
                    </div>
                </div>

            </div>
            <a href="#" className='ibtn' ><i class="fa fa-angle-double-up"></i></a>
            <div className='myname'>
                <h6>Desinged & Developed By Praveenn Copyright &copy; &#8482; </h6>
            </div>




        </div>
    )
}

export default Reservation;