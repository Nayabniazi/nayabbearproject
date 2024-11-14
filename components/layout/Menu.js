import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>

            <ul className="main-menu">
                <li className="has-children"><Link className="active" href="/">What We Do</Link>
                    <ul className="sub-menu">
                       
                        <li><Link href="/index-2">Item we take</Link></li>
                        <li><Link href="/services">Dumpster Renatls</Link></li>
                        <li><Link href="/index-3">JK Dumpster Bag</Link></li>
                        <li><Link href="/trackyourparcel">JK Junk Removal</Link></li>
                        <li><Link href="/index-4">Jk Same Day Junk Removal</Link></li>
                    </ul>
                </li>
                

















                <li className="has-children"><Link href="#">How it Works</Link>
                    <ul className="sub-menu">
                       
                        <li><Link href="/workprocess">Residential</Link></li>
                        <li><Link href="/request-a-quote">Commercial</Link></li>
                        <li><Link href="/our-team">National Accounts</Link></li>
                       
                    </ul>
                </li>
                <li className="has-children"><Link href="/blog">Pricing</Link>
                    <ul className="sub-menu">
                    <li><Link href="/service-detail">Estimate Pricing</Link></li>
                    <li><Link href="/newsletter">Dumpster Pricing</Link></li>
                 
                    <li><Link href="/faqs">Jk Removal Pricing</Link></li>
                       

                    </ul>
                </li>
                <li className="has-children"><Link href="/blog">More</Link>
                    <ul className="sub-menu">
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Our Location</Link></li>
                        <li><Link href="/register">Contact us</Link></li>
                        <li><Link href="/comingsoon">Events</Link></li>
                        <li><Link href="/newsletter">Resources</Link></li>
                        <li><Link href="/blog-single">Blog </Link></li>
                       

                    </ul>
                </li>
            </ul>
        </>
    )
}
