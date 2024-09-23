import React, {useState, useMemo} from 'react';
import ImageSec from './ImageSec.js';
import GetInTouch from './GetInTouch.js';

export default function MyProject() {
    const [imgSecAcctive, setImgSecAcctive] = useState(true);
    const [getTouchAcctive, setGetTouchAcctive] = useState(false);
    const [thirdSecAcctive, setThirdSecAcctive] = useState(false);
    const styles = {
        style1:{
            backgroundImage: "linear-gradient(to right, #c208d3, #2f0179)",
        },
        style2:{
            backgroundColor: "#343a40",
        }
    }
    
    return (
        <>
        <section id="myProjectsId" className="container-fluid myproject-sec bg-dark text-light">
            <dev className="myproject-cont">
                <dev>
                    <h2>My Project</h2>
                    <p>My name is Ragab, I live in Giza. this is the 1st project in react development</p>
                </dev>
                <dev className="navbar myproject-tab">
                    <ul className="navbar-nav">
                        <li className="nav-item" style={{...imgSecAcctive? styles.style1: styles.style2}}>
                            <a className="nav-link" onClick={() =>  {
                                setImgSecAcctive(true);
                                setGetTouchAcctive(false);
                                setThirdSecAcctive(false);
                            }}>1st Section</a>
                        </li>
                        <li className="nav-item" style={{...getTouchAcctive? styles.style1: styles.style2}}>
                            <a className="nav-link" onClick={() =>  {
                                setImgSecAcctive(false);
                                setGetTouchAcctive(true);
                                setThirdSecAcctive(false);
                            }}>2nd Section</a>
                        </li>
                        <li className="nav-item" style={{...thirdSecAcctive? styles.style1: styles.style2}}>
                            <a className="nav-link" onClick={() =>  {
                                setImgSecAcctive(false);
                                setGetTouchAcctive(false);
                                setThirdSecAcctive(true);
                            }}>3rd Section</a>
                        </li>
                    </ul>
                </dev>
                {thirdSecAcctive && <dev className="third-sec">
                    <p>My name is Ragab, I live in Giza. this is the 1st project in react development</p>
                </dev>}
            </dev>
        </section>
        {imgSecAcctive && <ImageSec />}
        <GetInTouch />
        </>
    )
}
