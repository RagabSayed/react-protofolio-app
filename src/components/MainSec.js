import React from 'react';
import img from './img01.svg';
import {Typewriter, Cursor} from 'react-simple-typewriter';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function MainSec() {
   
    return (
        <main className="main-sec p-5">
            <div className="main-sec-con row px-lg-5">
                <div className="main-sec-con-text col-md-6">
                    <p className="welcom-p">Welcome All In My Prtofolio</p>
                    <h1>Hi! I'm Ragab <br/>Sayed <br/>Ismail,{' '}
                        <Typewriter 
                            words= {['FullStack Web Developer', 'FrontEnd Developer', 'BackEnd Developer']}
                            loop= {0}
                            typeSpeed= {120}
                            deleteSpeed= {80}
                        />
                        <span className="text-secondary"><Cursor cursorStyle='|' /></span> 
                    </h1>
                    <p className="hello-p"> Hello Everyone, I have more than years of experience in the field of programming, starting from 
                    providing technical support services, examining problems, studying developments, implementing system testing operations, 
                    and ending with Web Developement. </p>
                    <button className="btn text-light fs-5">Let's Connect <FaRegArrowAltCircleRight className="ms-2"/></button>
                </div>
                <div className="main-sec-con-img col-md-6">
                    <img src={img} alt="img" height="400" width="400"/>
                </div>
            </div>
        </main>
    );
}

export default MainSec;