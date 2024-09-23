import React from 'react';
import img09 from './images/img09.avif';

export default function GetInTouch() {
    return (
        <>
            <section className="touch-sec container-fluid">
                <div className="touch-sec-cont row pb-5">
                    <div className="touch-sec-img col-md-6">
                        <img src={img09} alt="img09" width="100%"/>
                    </div>
                    <div id="connectId" className="touch-sec-form col-md-6">
                        <h2 className="my-5">Get In Touch</h2>
                        <form className="my-4">
                            <div className="mb-3 row" >
                                <div className="col-6"  >
                                    <input className="form-control" type="text" placeholder="Frist Name" />
                                </div>
                                <div className="col-6"  >
                                    <input className="form-control" type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="mb-3 row" >
                                <div className="col-6"  >
                                    <input className="form-control" type="text" placeholder="Email Address" />
                                </div>
                                <div className="col-6"  >
                                    <input className="form-control" type="text" placeholder="Phone No." />
                                </div>
                            </div>
                            <div className="mb-3" >
                                <textarea className="form-control" rows={5}  placeholder="Message" ></textarea>
                            </div>
                            <button className="btn btn-light btn-lg px-5 rounded-0 mt-5" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </section>
            <div className="add-email">
                <div className="">
                    <h3>See My Projects At Once & Leave Here Your E-mail Address</h3>
                </div>
                <div className="mb-3 input-group add-emil-form">
                    <input type="text" class="form-control" placeholder="Email Address"/>
                    <input type="submit" class="btn btn-dark" value="Submit" />
                    
                </div>
            </div>
        </>
    )
}
