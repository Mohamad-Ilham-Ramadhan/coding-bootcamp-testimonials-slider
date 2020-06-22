import React, { useState } from "react";

export default function App() {
  return (
    <section className="container">
      <div className="bg curve"></div>

      <article className="slider">
        <div className="slider__item">
          <img className="slider__bg slider__bg--pattern" />
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
