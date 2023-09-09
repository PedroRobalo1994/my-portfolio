import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : require("../../images/quote-generator.png"),
        disc : "Quote Generator is a simple app that generates random quotes from famous people.",
        link: "https://pedrorobalo1994.github.io/quote-generator/"
    },
    {
        img : require("../../images/infinite-scroll.png"),
        disc : "Infinite Scroll is a simple app that fetches images from the Unsplash API in continuous way. Limited to only 50 requests/hour.",
        link: "https://pedrorobalo1994.github.io/infinite-scroll/"
    },
    {
        img : require("../../images/picture-in-picture.png"),
        disc : "This project enables website users to screenshare any stream and resize it in picture-in-picture (PIP) format.",
        link: "https://pedrorobalo1994.github.io/picture-in-picture/"
    },
    {
        img : require("../../images/joke-teller.png"),
        disc : "This projects is about a funny robot that tells jokes",
        link: "https://pedrorobalo1994.github.io/joke-teller/"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        link: "/"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    color: #01b1be;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`