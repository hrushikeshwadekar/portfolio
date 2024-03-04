import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <h1 data-aos="flip-left">Services</h1>
        <br />
        <br />
        <div className="services-container">
          <div className="service-item" data-aos="fade-right">
            <h4>Web Development</h4>
            <p>I offer full-stack web development services, crafting modern, responsive websites using the latest technologies like HTML, CSS, JavaScript, and frameworks such as React.js or Angular. From sleek designs to powerful backend functionality, I ensure your website stands out and delivers an exceptional user experience.</p>
          </div>

          <div className="service-item" data-aos="fade-left">
            <h4>Mobile App Development</h4>
            <p>Crafting sleek, user-friendly mobile apps for Android and iOS platforms using cutting-edge technologies like React Native and Flutter. From elegant designs to seamless performance, I create engaging experiences to captivate your audience.</p>
          </div>

          <div className="service-item" data-aos="fade-right">
            <h4>UI/UX Design</h4>
            <p>Elevate your brand with our fresh UI/UX design service, crafted by emerging talents. We specialize in creating engaging interfaces that resonate with your audience. Let us bring your vision to life and leave a lasting impact.</p>
          </div>

          <div className="service-item" data-aos="fade-left">
            <h4>Java App Development</h4>
            <p>Empower your business with our Java app development service. Leveraging the power of Java, we craft robust and scalable applications tailored to your unique requirements. From enterprise solutions to mobile apps, our expert team delivers high-performance software that drives success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
