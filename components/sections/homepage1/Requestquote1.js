import { useEffect, useState } from 'react'
import CountUp from '@/components/elements/CounterUp'
import Link from "next/link"

export default function Requestquote1() {
    const [inViewport, setInViewport] = useState(false);

    const handleScroll = () => {
        const elements = document.getElementsByClassName('counterUp');
        if (elements.length > 0) {
        const element = elements[0];
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInViewport && !inViewport) {
            setInViewport(true);
        }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            <section className="section bg-leading-company pt-95">
                <div className="box-bg-leading" />
                <div className="container"style={{marginBottom:'400px',marginTop:'100px'}}>
                    <div className="text-center mb-45">
                        <h2 className="color-brand-1 mb-15 wow animate__animated animate__fadeIn" >World’s Leading Companies<br className="d-none d-lg-block" />For Over 80 Years.</h2>
                        <p className="font-md color-white wow animate__animated animate__fadeIn">A big opportunity for your
                            business growth. Delivering Results for Industry Leaders. We are<br className="d-none d-lg-block" />proud of our workfor and have worked hard.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                            <div className="cardLeadingCompany">
                                <div className="cardImage"><span className="img wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/handover.png" alt="transp" /></span></div>
                                <div className="cardInfo">
                                    <h3 className="color-brand-1 wow animate__animated animate__fadeIn"><span>+</span><span className="counterUp">{inViewport && <CountUp end={254} duration={10} />}</span></h3>
                                    <p className="font-lg color-white wow animate__animated animate__fadeIn">Parcels Shipped
                                        Safely</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                            <div className="cardLeadingCompany">
                                <div className="cardImage"><span className="img"><img src="/assets/imgs/page/homepage1/cities.png" alt="transp" /></span></div>
                                <div className="cardInfo">
                                    <h3 className="color-brand-1 wow animate__animated animate__fadeIn"><span>+</span><span className="count">{inViewport && <CountUp end={457} duration={10} />}</span></h3>
                                    <p className="font-lg color-white wow animate__animated animate__fadeIn">Cities Served
                                        Worldwide</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                            <div className="cardLeadingCompany">
                                <div className="cardImage"><span className="img"><img src="/assets/imgs/page/homepage1/client.png" alt="transp" /></span></div>
                                <div className="cardInfo">
                                    <h3 className="color-brand-1 wow animate__animated animate__fadeIn"><span>+</span><span className="count">{inViewport && <CountUp end={384} duration={10} />}</span></h3>
                                    <p className="font-lg color-white wow animate__animated animate__fadeIn">Satisfied Clients
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                            <div className="cardLeadingCompany">
                                <div className="cardImage"><span className="img"><img src="/assets/imgs/page/homepage1/company.png" alt="transp" /></span></div>
                                <div className="cardInfo">
                                    <h3 className="color-brand-1 wow animate__animated animate__fadeIn"><span>+</span><span className="count">{inViewport && <CountUp end={483} duration={10} />}</span></h3>
                                    <p className="font-lg color-white wow animate__animated animate__fadeIn">Company We Help</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
        </>
    )
}
