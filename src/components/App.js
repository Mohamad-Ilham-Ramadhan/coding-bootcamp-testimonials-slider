import React, { useState } from "react";
import bgPattern from "../images/pattern-bg.svg";

export default function App() {
  return (
    <section className="container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur
      aliquid dolorem vero. Harum quod nisi quae, consequatur incidunt velit
      saepe earum impedit amet totam debitis iure nostrum, quasi sequi?
      <div className="bg bg--curve"></div>
      <article className="slider">
        <div className="slider__item">
          <img className="slider__bg slider__bg--pattern" src={bgPattern} />
          <q className="slider__quotes"></q>
          <p className="slider__author"></p>
        </div>
        <div className="slider__item">
          <img className="slider__bg slider__bg--quotes" />
          <figure className="slider__figure">
            <img src="" alt="" />
          </figure>
          <div className="slider__controls">
            <button className="slider__control__prev"></button>
            <button className="slider__control__next"></button>
          </div>
        </div>
      </article>
    </section>
  );
}
