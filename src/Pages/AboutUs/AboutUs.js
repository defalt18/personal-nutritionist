/* eslint-disable */
import React from "react";
import "./AboutUs.css";
import ellipse from '../../Images/Ellipse.png'
import mital from '../../Images/Mital.png'
import rushil from '../../Images/Rushil.png'
import akshar from '../../Images/Akshar.png'
import jigar from '../../Images/Jigar.png'
import kushagra from '../../Images/Kushagra.png'
import anany from '../../Images/Anany.png'
import rushi from '../../Images/Rushi.png'
import tanishqa from '../../Images/Tanishqa.png'
import akash from '../../Images/Aakash.png'
import marmik from '../../Images/Marmik.png'
import Footer from '../../Components/Footer/footer'

function AboutUs() {

  return (
    <div className="aboutus__screen " style={{ maxWidth: "100vw" }}>
        <div className="aboutus__head">
          <h1>About Us</h1>
        </div>

        <h1 className="container__head">Our aim</h1>
        <div className="container">
        
          <p className="content">Our platform offers credible information to help you make healthful eating choices. We are developing a goto website for people who are obsessing over fitness and count their calories and hesitate over mouth watering treats. Our aim is to make sure people know what they eat and how much they need for their day. This is a healthy place for people as they are surrounded by world class nutritionists giving them opinions and prescribing diet plans to work with their routine all packaged in one deal. 
            <br /><br />
            We aim to help users to find perfect recipes for themselves. Users can set goals and follow the best diet plans for overall health benefits. We use the best food databases across the internet to provide details about the number of nutrients, vitamins etc. of the food items.</p>
        <div className="img-cont">
          <img class="girl-img" src={ellipse} alt="" />
          </div>
          </div>
    <Footer/>
</div>
);
}

export default AboutUs;