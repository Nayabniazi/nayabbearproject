import Link from "next/link";

export default function Footer1({ }) {
    return (


<>
    <footer className="footer" style={{ marginTop: '0px' }}>
        <div className="footer-1" style={{ backgroundColor: 'black' ,height:'350px',}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 width-23 mb-30">
                        <div className="mb-20">
                            <img src="/img/bear.png.png" width={150} height={100} alt="transp" />
                        </div>
                        <p className="font-xs mb-20 color-white">
                            We fuse our global network with our depth of expertise in air freight, ocean freight, railway transportation, trucking, and multimode transportation, also we are providing sourcing, warehousing, E-commercial fulfillment, and value-added service to our customers including kitting, assembly, customized package and business inserts, etc.
                        </p>
                        <h6 className="color-brand-1">
                            View our Details
                        </h6>
                        {/* Removed social media icons and followed by the buttons */}
                    </div>
                    <div className="col-lg-3 width-16 mb-30">
                        <h5 className="mb-10 color-brand-1">Services</h5>
                        <ul className="menu-footer">
                            <li><Link href="/index-2">Item  we take</Link></li>
                            <li><Link href="/trackyourparcel">Junk removal</Link></li>
                            <li><Link href="/services">Dumpster Rental</Link></li>
                            <li><Link href="/index-3">Jk Dumpster Bag</Link></li>
                            <li><Link href="/our-team">National Accounts</Link></li>
                           
                        </ul>
                    </div>
                    <div className="col-lg-3 width-16 mb-30">
                        <h5 className="mb-10 color-brand-1">Company</h5>
                        <ul className="menu-footer">
                            <li><Link href="/about"> About us</Link></li>
                            <li><Link href="comingsoon">Events</Link></li>
                            <li><Link href="#">Apply Locally</Link></li>
                            <li><Link href="#">Neighbory</Link></li>
                            <li><Link href="/register">Contact us</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-3 width-16 mb-30">
                        <h5 className="mb-10 color-brand-1">Other Links</h5>
                        <ul className="menu-footer">
                            <li><Link href="#">Terms of use</Link></li>
                            <li><Link href="#">Accesibility</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">California Privacy Policy</Link></li>
                            <li><Link href="#">Notice</Link></li>
                            <li><Link href="#">Disclaimer</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 width-20 mb-30">
                        <h5 className="mb-10 color-brand-1">Gallery</h5>
                        <div className="galleries-footer">
                            <ul className="list-imgs">
                                <li> <img src="/assets/imgs/page/homepage1/gal1.png" alt="transp" /></li>
                                <li> <img src="/assets/imgs/page/homepage1/gal2.png" alt="transp" /></li>
                                <li> <img src="/assets/imgs/page/homepage1/gal3.png" alt="transp" /></li>
                                <li> <img src="/assets/imgs/page/homepage1/gal4.png" alt="transp" /></li>
                                <li> <img src="/assets/imgs/page/homepage1/gal5.png" alt="transp" /></li>
                                <li> <img src="/assets/imgs/page/homepage1/gal6.png" alt="transp" /></li>
                                <li> <img src="/assets/imgs/page/homepage1/gal7.png" alt="transp" /></li>
                                <li> <img src="/assets/imgs/page/homepage1/gal8.png" alt="transp" /></li>
                                <li> <img src="/assets/imgs/page/homepage1/gal9.png" alt="transp" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-2" style={{ paddingTop: '0px',backgroundColor:'black',paddingBottom:'50px', }}>
            <div className="container">
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 text-center text-lg-start">
                            <span className="color-grey-300 font-md"> </span>
                        </div>

                        {/* Buttons Section at the bottom */}
                        <div className="col-lg-6 col-md-12 text-center text-lg-end" style={{ display: 'flex', justifyContent: 'space-between',marginLeft:'300px' ,}}>
                            {/* Online Booking Button */}
                            <a href="/login" style={{ textDecoration: 'none' }}>
                            <button
                                style={{
                                    backgroundColor: 'orange',
                                    color: 'black',
                                    border: 'none',
                                    padding: '10px 20px',
                                    cursor: 'pointer',
                                   
                                    display: 'inline-flex',  // Align text inline (horizontal)
                                    justifyContent: 'center', // Center text horizontally inside the button
                                    alignItems: 'center', // Center text vertically inside the button
                                }}
                            >
                                Online Booking
                            </button>
                            </a>
                            {/* Our Location Button */}
                            <a href="/contact" style={{ textDecoration: 'none' }}>
                            <button
                                style={{
                                    backgroundColor: 'orange',
                                    color: 'black',
                                    border: 'none',
                                    padding: '10px 20px',
                                    cursor: 'pointer',
                                   
                                    display: 'inline-flex',  // Align text inline (horizontal)
                                    justifyContent: 'center', // Center text horizontally inside the button
                                    alignItems: 'center', // Center text vertically inside the button
                                }}
                            >
                                Our Location
                            </button>
                            </a>
                            <a href="/register" style={{ textDecoration: 'none' }}>
                            {/* Franchise Button */}
                            <button
                                style={{
                                    backgroundColor: 'orange',
                                    color: 'black',
                                    border: 'none',
                                    padding: '10px 20px',
                                    cursor: 'pointer',
                                    
                                    display: 'inline-flex',  // Align text inline (horizontal)
                                    justifyContent: 'center', // Center text horizontally inside the button
                                    alignItems: 'center', // Center text vertically inside the button
                                }}
                            >
                                Franchise
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</>











    )
}
