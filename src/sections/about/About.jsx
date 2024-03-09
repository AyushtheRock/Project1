import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>About</h2>
                <p>About Us</p>
            </div>
            <div class="row content ">
                <div class="col-lg-6 ">
                    <p>
                        Informatics Systems India is a global technology solution. It has a long-term IT partners as clients and help them realize measurable value from their business vision using technology.
                    </p>
                    
                      <div className="acm">
                      <i class='bx bx-check-double'></i><li> It engages in the provision of engineering projects and products that address all aspects of the IT environment.</li>
                      </div>
                      <div className="acm">
                      <i class='bx bx-check-double'></i><li> It offers customized consultation and support services for doctoral candidates, Masters and Graduate students.</li>
                      </div>
                     <div className="acm">
                     <i class='bx bx-check-double'></i><li> We have designed our services to be of high quality, affordable, and customized based on clients. Wingz Technologies have been serving clients since 2007.</li>
                     </div>
                    
                   
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0">
                    <p>
                      Energize Your Business
                      WINGZ is a doing Web Designing & Web Application company, specialized in premium web design & development, customized web applications & software development, search engine optimization, hosting, eBusiness and traditional communication solutions for corporate, government and small to big business clients.
                    </p>
                    <button className='btnm'><a href="about.php" class="btn-learn-more">Learn More</a></button>
                </div>

                <div className="box1">
                   <div className='box2'>
                     <h2> 😊 2007 </h2>
                     <p>Year Since Wingz Technologies have been serving clients since 2007.</p>
                     <a href="#about">Find out more ...</a>
                   </div>
                   <div className='box2'>
                     <h2> 👥 13</h2>
                     <p>We have minimum of 8 to 12 years of experience staff in the development sector.</p>
                     <a href="#about">Find out more ...</a>
                   </div>
                   <div className='box2'>
                     <h2> 🖨️ 600 </h2>
                     <p>Our live projects and research papers are regularly published in more than 2600 magazines</p>
                     <a href="#about">Find out more ...</a>
                   </div>
                   <div className='box2'>
                     <h2> 🖨️ 2400 </h2>
                     <p>We regularly publish in IEEE  such as Elsevier, Science Direct, IEEE Xplore.</p>
                     <a href="#about">Find out more ...</a>
                   </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About;
