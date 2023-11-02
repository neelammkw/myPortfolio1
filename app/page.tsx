import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: "Neelam's TechnoDev Portfolio",
  description: 'Hi This is Neelams Developement Portfolio Demo',
}
export default function Home() {
  return (
    <>
    <header>
        <nav>
        <div className="left">Neelam&apos;s Portfolio</div>

            <div className="right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <section className="firstSection">
            <div className="leftSection">
                <div>Hi, My name is <span className="purple">Neelam</span>
                </div>
                <div>
                    and I am a passionate
                </div>
                <div> <span id="element">
                    </span></div>
                <button className="btn">Download Resume</button>
                <button className="btn">Visit GitHub</button>
            </div>
          
            <div className="rightSection">
                <Image  src="l2.png" alt="Web Developement"/>
            </div>
        </section >
        <hr/>
        <section className="secondSection"><span className="textgray">What I have done so far
Image 
            </span>
            <h1>
                Work Eperience
            </h1>
            <div className="box">
                <div className="vertical">
                    <Image  className="image-top" src="/h2.png" alt=""/>
                    <div className="vertical-text">Html Developer(2010-2012)</div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quam dignissimos dolorum
                        molestiae ipsa, consequatur ab atque sunt distinctio laudantium reprehenderit officiis? Ipsum.
                    </div>
                </div>
                <div className="vertical">
                    <Image  className="image-top" src="/h2.png" alt=""/>
                    <div className="vertical-text">Html Developer(2010-2012)</div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quam dignissimos dolorum
                        molestiae ipsa, consequatur ab atque sunt distinctio laudantium reprehenderit officiis? Ipsum.
                    </div>
                </div>
                <div className="vertical">
                    <Image  className="image-top" src="/h2.png"alt=""/>
                    <div className="vertical-text">Html Developer(2010-2012)</div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quam dignissimos dolorum
                        molestiae ipsa, consequatur ab atque sunt distinctio laudantium reprehenderit officiis? Ipsum.
                    </div>
                </div>
                <div className="vertical"></div>
            </div>
        </section>
    </main>
    <footer>
        <div className="footer">
            <div className="footer-first">
                <h3>Neelam&apos;s Developer Portfolio</h3>
            </div>
            <div className="footer-second">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        Services
                    </li>
                </ul>
            </div>

        </div>
        <div className="footer-rights">
            Copyright &#169; www.neelamportfolio.com | All Rights reserved.
        </div>
    </footer>
    </>  );
}
