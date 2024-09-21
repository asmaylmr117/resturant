import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [activeMealType, setActiveMealType] = useState('breakfast');
  useEffect(() => {
    const bars = document.querySelector(".hamburger svg");
    const X_color = document.querySelector(".line");
    const cenC = document.querySelector(".hamburger svg .C");
    const line_top = document.querySelector(".line-top-bottom");
    const Svg = document.querySelector(".hamburger input + svg");
    const nav = document.querySelector(".nav");
    const toTop = document.querySelector(".to_top");
    const fixedH = document.querySelector("header");
    const mealbtns = document.querySelectorAll(".title .mealsBtn .mealBtn");
    const home = document.querySelector(".int");
    const about = document.querySelector(".about");
    const services = document.querySelector(".services");
    const menu = document.querySelector(".menu");
    const footer = document.querySelector("footer");
    const links = document.querySelectorAll("header .container .nav ul li a");

    bars.addEventListener("click", () => {
      nav.classList.toggle("Show");
      X_color.classList.toggle("X-color");
      Svg.classList.toggle("rotSVG");
      line_top.classList.toggle("line_T");
      cenC.classList.toggle("cen");
    });

    window.addEventListener("scroll", () => {
      
    });

    toTop.addEventListener("click", () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 200);
    });

    window.onscroll = () => {
      if (this.scrollY >= 300) {
        fixedH.classList.add("fixedHeader");
    } else {
        fixedH.classList.remove("fixedHeader");
    }
    };

    mealbtns.forEach((ele) => {
      ele.addEventListener("click", () => {
        mealbtns.forEach((e) => {
          e.classList.remove("active");
        });
        ele.classList.add("active");
      });
    });

    const handleScroll = (currSec, link, offset) => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= currSec.offsetTop - offset) {
          links.forEach((e) => {
            if (e.getAttribute("href") === link) {
              links.forEach((ele) => {
                ele.classList.remove("active");
              });
              e.classList.add("active");
            }
          });
        }
      });
    };

    handleScroll(home, '#', 83);
    handleScroll(about, '#about', 83);
    handleScroll(services, '#service', 83);
    handleScroll(menu, '#menu', 83);
    handleScroll(footer, '#contact', 670);
  }, []);

  useEffect(() => {
    fetchMeals(activeMealType);
  }, [activeMealType]);

  const fetchMeals = async (mealType) => {
    try {
      const response = await fetch('foods.json');
      const data = await response.json();
      setMeals(data[mealType]);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  return (
    <div>
      <div className="to_top">↑</div>
      <header>
        <div className="container">
          <div className="logo">
            <a href="#">
              <h1>
                <i className="fas fa-utensils"></i>
                resturant
              </h1>
            </a>
          </div>
          <label className="hamburger">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32" className="">
              <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line C" d="M7 16 27 16"></path>
            </svg>
          </label>
          <div className="nav">
            <ul>
              <li><a href="#" className="active">home</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#service">service</a></li>
              <li><a href="#menu">menu</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </div>
        </div>
      </header>
      <div className="int">
        <div className="container">
          <div className="L-content">
            <h1>Enjoy Our Delicious Meal</h1>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <button>book a table</button>
          </div>
          <div className="R-img">
            <img src="./img/hero.png" className="rot_img" alt="" />
          </div>
        </div>
      </div>
      <div className="about" id="about">
        <div className="container">
          <div className="left-imgs">
            <div className="image"data-aos="fade-right" ><img src="./img/about-1.jpg" alt="" /></div>
            <div className="image"data-aos="fade-right" ><img src="./img/about-2.jpg" alt="" /></div>
            <div className="image"data-aos="fade-right" ><img src="./img/about-3.jpg" alt="" /></div>
            <div className="image"data-aos="fade-right" ><img src="./img/about-4.jpg" alt="" /></div>
          </div>
          <div className="R-cotent">
            <div className="M-heading"><h5>About Us</h5></div>
            <h1 className="wel">Welcome to<i className="fas fa-utensils"></i>Resturant</h1>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit</p>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className="info">
              <div className="formation">
                <h1>15</h1>
                <div className="con">
                  <span>Years of</span>
                  <h4>EXPERIENCE</h4>
                </div>
              </div>
              <div className="formation">
                <h1>50</h1>
                <div className="con">
                  <span>Popular</span>
                  <h4>MASTER CHEFS</h4>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="services" id="service">
        <div className="container">
          <div className="col">
            <i className="fas fa-user-tie"></i>
            <h5>Master Chefs</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diams</p>
          </div>
          <div className="col">
            <i className="fas fa-utensils"></i>
            <h5>Quality Food</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diams</p>
          </div>
          <div className="col">
            <i className="fas fa-cart-plus"></i>
            <h5>Online Order</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diams</p>
          </div>
          <div className="col">
            <i className="fas fa-headset"></i>
            <h5>24/7 Service</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diams</p>
          </div>
        </div>
      </div>
      <div className="menu" id="menu">
        <div className="container">
          <div className="title">
            <div className="M-heading"><h5>Food Menu</h5></div>
            <h1>Most Popular Items</h1>
            <div className="mealsBtn">
              <div className={`mealBtn ${activeMealType === 'breakfast' ? 'active' : ''}`} onClick={() => setActiveMealType('breakfast')}>
                <i className="fas fa-coffee"></i>
                <div className="des">
                  <span>Popular</span>
                  <h6>Breakfast</h6>
                </div>
              </div>
              <div className={`mealBtn ${activeMealType === 'lunch' ? 'active' : ''}`} onClick={() => setActiveMealType('lunch')}>
                <i className="fas fa-hamburger"></i>
                <div className="des">
                  <span>Popular</span>
                  <h6>Lunch</h6>
                </div>
              </div>
              <div className={`mealBtn ${activeMealType === 'dinner' ? 'active' : ''}`} onClick={() => setActiveMealType('dinner')}>
                <i className="fa fa-utensils me-3"></i>
                <div className="des" >
                  <span>Popular</span>
                  <h6>Dinner</h6>
                </div>
              </div> 
              </div>
          </div>
          <div className="meals" data-aos="fade-right">
            {meals.map((meal, index) => (
              <div className="meal" key={index} data-aos="fade-right">
                <img src={meal.image} alt={meal.name} />
                <div className="descrip"data-aos="fade-right">
                  <h5>{meal.name} <span>{meal.price}</span></h5>
                  <span>{meal.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
          <div className="manager">
        <div className="container">
          <div className="title">
            <div className="M-heading"><h5>The Boss</h5></div>
            <h1>The Restoran Manager</h1>
          </div>
          <div className="chefs">
            <div className="chef">
              <div className="image"><img src="./img/team-4.jpg" alt="" /></div>
              <h5>Mohammed</h5>
              <span>Manager</span>
              <div className="media">
                <a href="https://www.facebook.com/profile.php?id=100089133649005"><i className="fab fa-facebook-f"></i></a>
                <a href="https://wa.me/+212619629538"><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/sarah__official2000/"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container">
          <div className="title">
            <div className="M-heading"><h5>Team Members</h5></div>
            <h1>Our Master Chefs</h1>
          </div>
          <div className="chefs">
            <div className="chef">
              <div className="image"><img src="./img/team-1.jpg" alt="" /></div>
              <h5>ahmed</h5>
              <span>Master Chef</span>
              <div className="media">
                <a href="https://www.facebook.com/profile.php?id=100014953035548"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/ElSayedKewan20"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/elsayed_kewan/"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="chef">
              <div className="image"><img src="./img/team-2.jpg" alt="" /></div>
              <h5>Osama</h5>
              <span>Master Chef</span>
              <div className="media">
                <a href="https://www.facebook.com/profile.php?id=100014953035548"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/ElSayedKewan20"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/elsayed_kewan/"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="chef">
              <div className="image"><img src="./img/team-3.jpg" alt="" /></div>
              <h5>ibrahim</h5>
              <span>Master Chef</span>
              <div className="media">
                <a href="https://www.facebook.com/profile.php?id=100014953035548"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/ElSayedKewan20"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/elsayed_kewan/"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
           </div>
        </div>
      </div>
      <div className="clients">
        <div className="container">
          <div className="title">
            <div className="M-heading"><h5>Testimonial</h5></div>
            <h1>Our Clients Say!!!</h1>
          </div>
          <div className="boxs">
            <div className="box">
              <i className="fas fa-quote-left"></i>
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div className="info">
                <img src="./img/testimonial-1.jpg" alt="" />
                <div className="con">
                  <h5>Ahmed</h5>
                  <span>Gamer</span>
                </div>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-quote-left"></i>
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div className="info">
                <img src="./img/testimonial-2.jpg" alt="" />
                <div className="con">
                  <h5>Ahmed</h5>
                  <span>Gamer</span>
                </div>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-quote-left"></i>
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div className="info">
                <img src="./img/testimonial-3.jpg" style={{ height: '50px' }} alt="" />
                <div className="con">
                  <h5>Ahmed</h5>
                  <span>Gamer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="contact">
        <div className="container">
          <div className="company">
            <div className="M-heading"><h5>Company</h5></div>
            <ul>
              <li><a href="#"><i className="fas fa-angle-right"></i>About Us</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i>Contact Us</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i>Reservation</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i>Privacy Policy</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i>Terms & Condition</a></li>
            </ul>
          </div>
          <div className="opening">
            <div className="M-heading"><h5>Opening</h5></div>
            <h5>Monday - Saturday</h5>
            <span style={{ display: 'block' }}>09AM - 09PM</span>
            <h5>Sunday</h5>
            <span style={{ display: 'block' }}>10AM - 08PM</span>
          </div>
          <div className="contact">
            <div className="M-heading"><h5>Contact</h5></div>
            <p><i className=" fas fa-map-marker-alt"></i>123 Street, cairo, Egypt</p>
            <p><i className="fas fa-phone"></i><a href="tel:+20155884327">+20155884327</a></p>
            <p><i className="fas fa-envelope"></i><a href="mailto:asmaylmr117@gmail.com">asmaylmr117@gmail.com</a></p>
            <div className="media">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="madeB">
          <p>© resturant, All Right Reserved. Made with <i className="fas fa-heart" ></i> By <a href="https://protofolio-delta.vercel.app/" class="mostafa" > Eng: MOSTAFA ISMAIL</a></p>
        </div>
      </footer>
    </div>
  );
};

export default App;

