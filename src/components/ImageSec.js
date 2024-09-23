import React from 'react';
import img03 from './images/img03.jpg';
import img04 from './images/img04.jpg';
import img05 from './images/img05.jpg';
import img06 from './images/img06.jpg';
import img07 from './images/img07.jpg';
import img08 from './images/img08.jpg';

function ImageSec() {
    return (
        <section className="img-sec container-fluid py-5">
            <div className="sec-navbar">

            </div>
            <div className="img-sec-cont">
                <div className="img-sec-item">
                    <img src={img03} alt="img03" width="100%" height="500px" />
                    <div className="img-sec-item-text">
                        <h2>Business Startup</h2>
                        <p>Design & Development</p>
                    </div>
                </div>
                <div className="img-sec-item">
                    <img src={img04} alt="img04" width="100%" height="500px" />
                    <div className="img-sec-item-text">
                        <h2>Business Startup</h2>
                        <p>Design & Development</p>
                    </div>
                </div>
                <div className="img-sec-item">
                    <img src={img05} alt="img05" width="100%" height="500px" />
                    <div className="img-sec-item-text">
                        <h2>Business Startup</h2>
                        <p>Design & Development</p>
                    </div>
                </div>
                <div className="img-sec-item">
                    <img src={img06} alt="img06" width="100%" height="500px" />
                    <div className="img-sec-item-text">
                        <h2>Business Startup</h2>
                        <p>Design & Development</p>
                    </div>
                </div>
                <div className="img-sec-item">
                    <img src={img07} alt="img07" width="100%" height="500px" />
                    <div className="img-sec-item-text">
                        <h2>Business Startup</h2>
                        <p>Design & Development</p>
                    </div>
                </div>
                <div className="img-sec-item">
                    <img src={img08} alt="img08" width="100%" height="500px" />
                    <div className="img-sec-item-text">
                        <h2>Business Startup</h2>
                        <p>Design & Development</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImageSec;