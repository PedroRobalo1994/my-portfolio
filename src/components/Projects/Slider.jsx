import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
      {
        img : require("../../images/ai-companion.png"),
        disc : "This is a SaaS-based AI application that allows users to craft their own AI companions. This project utilizes Next.js 13, Tailwind, and the OpenAI API for its functionalities. Additionally, it leverages Prisma for data storage of user-created AI companions.",
        link: "https://ai-companion-chi-ochre.vercel.app/"
    },
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
        disc : "This project enables website users to screen-share any stream and resize it in picture-in-picture (PIP) format.",
        link: "https://pedrorobalo1994.github.io/picture-in-picture/"
    },
    {
        img : require("../../images/joke-teller.png"),
        disc : "This projects is about a funny robot that tells jokes.",
        link: "https://pedrorobalo1994.github.io/joke-teller/"
    },
    {
        img : require("../../images/light-dark-mode.png"),
        disc : "This project allows the user to enable light or dark mode in the website.",
        link: "https://pedrorobalo1994.github.io/light-dark-mode/"
    },
    {
      img: require("../../images/animated-template.png"),
      disc: "This project is a simple website template that is animated.",
      link: "https://pedrorobalo1994.github.io/animated-template/"
    },
    {
      img: require("../../images/animated-navigation.png"),
      disc: "This project adds multiple animations to the navigation bar.",
      link: "https://pedrorobalo1994.github.io/animated-navigation/"
    },
    {
      img: require("../../images/music-player.png"),
      disc: "This project is a simple music player.",
      link: "https://pedrorobalo1994.github.io/music-player/"
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