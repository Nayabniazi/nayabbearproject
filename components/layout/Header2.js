import Link from "next/link";
import { useEffect, useState } from 'react';
import Menu from "./Menu";

export default function Header2({ handleMobileMenuOpen }) {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
   
    return (
        <>
            {/* Top Bar */}
            <div className="top-bar-style-2">
            <div className="box-bar bg-grey-900">
                <div className="container position-relative">
                        <div className="row align-items-center" style={{ color: "white" }}>
                            {/* Left Section: Contact Info */}
                            <div className="col-lg-7 col-md-8 col-sm-5 col-4">
                            <Link
                                    className="phone-icon mr-45-color-white"
                                    href="tel:+01-246-357"
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                    <svg
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        ></path>
                                    </svg>
                                    Phone: +01-246-357 (Any time 24/7)
                                </Link>
                                <Link
                                    className="email-icon"
                                    href="mailto:contact@transp.eu.com"
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                        marginLeft: "15px",
                                    }}
                                >
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        ></path>
                                    </svg>
                                    contact@transp.eu.com
                                </Link>
                            </div>
                            {/* Right Section: Social Icons */}
                            <div className="col-lg-5 col-md-4 col-sm-7 col-8 text-end">
                                <Link
                                    className="icon-socials icon-twitter2"
                                    href="#"
                                    style={{ color: "white", marginLeft: "10px" }}
                                >
                                    <svg
                                        className="bi bi-twitter"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={14}
                                        fill="none"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Section */}
            <header className={scroll ? "header sticky-bar header-style-2 stick" : "header sticky-bar header-style-2"}>
                <div className="container">
                    <div className="header-middle">
                        <div className="header-logo">
                            <Link href="/" className="d-flex">
                                <img alt="transp" src="/assets/imgs/template/logo.svg" />
                            </Link>
                        </div>
                        <div className="header-contact">
                            <div className="box-header-contact-1 mr-30">
                                <img alt="Address" src="/assets/imgs/page/homepage3/address.png" />
                                <span>65 Allerton Street 901 N Pitt Str, USA</span>
                            </div>
                            <div className="box-header-contact-2">
                                <img alt="Phone" src="/assets/imgs/page/homepage3/phone.png" />
                                <span>65 Allerton Street 901 N Pitt Str, USA</span>
                            </div>
                        </div>
                    </div>
                    <div className="main-header">
                        <div className="header-left">
                            <nav className="nav-main-menu d-none d-xl-block">
                                <Menu />
                            </nav>
                            <div className="header-right">
                                <Link className="btn btn-default mr-10 hover-up" href="/login">
                                    Login
                                </Link>
                                <Link
                                    className="btn btn-brand-1 d-none d-xl-inline-block hover-up"
                                    href="/request-a-quote"
                                >
                                    Online Booking
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

