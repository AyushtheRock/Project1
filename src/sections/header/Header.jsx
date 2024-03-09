import React from 'react';
import './header.css'
import Group1 from '../../assests/group1.jpg';
import Group2 from '../../assests/eeejpg.jpg';
import Group3 from '../../assests/mec.jpg';
import './header.css';

const Header = () => {
  return (
   
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={Group1} class="d-block " alt="..." />
      <div class="carousel-caption">
        <h1>Project and Research Development</h1>
        <p>Some representative placeholder content for the first slide.</p>
        <a href="#portfolio"><button className='btnm'>Click me</button></a>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Group2} class="d-block " alt="..." />
      <div class="carousel-caption ">
        <h1>ESE And EEE Projects</h1>
        <p>Some representative placeholder content for the second slide.</p>
        <a href="#portfolio"><button className='btnm'>Click me</button></a>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Group3} class="d-block " alt="..." />
      <div class="carousel-caption">
        <h1>Mechanical Projects</h1>
        <p>Some representative placeholder content for the third slide.</p>
        <a href="#portfolio"><button className='btnm'>Click me</button></a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     
   
  )
}

export default Header;