import React, { useState, useEffect } from "react";
import bgPattern from "../images/pattern-bg.svg";
import bgQuotes from "../images/pattern-quotes.svg";
import authorFigure from "../images/image-john.jpg";
import iconNext from "../images/icon-next.svg";
import iconPrev from "../images/icon-prev.svg";
import { fakeDatabase as database } from "../fakeAPI";

export default function App() {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {}, []);
  return (
    <section className="container">
      <article className="slider">
        <div className="slider__item slider__item--quotes">
          <div className="slider__quotes">
            <img className="slider__bg slider__bg--quotes" src={bgQuotes} />
            <q className="slider__quotes__text">
              If you want to lay the best foundation possible I'd recommend
              taking this course. The depth the instructors go into is
              incredible. I now feel so confident about starting up as a
              professional developer.
            </q>
            <p className="slider__quotes__author">
              <span className="slider__quotes__author__name">John Tarkpor</span>
              <span className="slider__quotes__author__occupation">
                Junior Front-end Developer
              </span>
            </p>
          </div>
        </div>

        <div className="slider__item slider__item--figure">
          <figure className="slider__figure">
            <img className="slider__bg slider__bg--figure" src={bgPattern} />
            <div className="wrapper --relative">
              <img
                className="slider__figure__img"
                src={authorFigure}
                alt="author figure"
              />
              <div className="slider__controls">
                <button className="slider__controls__btn slider__controls__btn--prev">
                  <img src={iconPrev} alt="" />
                </button>
                <button className="slider__controls__btn slider__controls__btn--next">
                  <img src={iconNext} alt="" />
                </button>
              </div>
            </div>
          </figure>
        </div>
      </article>
    </section>
  );
}
