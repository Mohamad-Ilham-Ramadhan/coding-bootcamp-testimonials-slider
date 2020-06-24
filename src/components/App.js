import React, { useState, useEffect } from "react";
import bgPattern from "../images/pattern-bg.svg";
import bgQuotes from "../images/pattern-quotes.svg";
import authorFigure from "../images/image-john.jpg";
import iconNext from "../images/icon-next.svg";
import iconPrev from "../images/icon-prev.svg";
import { fakeDatabase as database } from "../fakeAPI";

export default function App() {
  const [users, setUsers] = useState(null);
  const [sliderUser, setSliderUser] = useState(null);

  useEffect(() => {
    setUsers(database.users);
  }, []);

  useEffect(() => {
    if (users != null) {
      setSliderUser(users[0]);
    }
  }, [users]);

  function handleNext(e) {
    let nextUser;
    let nextUserIndex =
      users.indexOf(users.find((user) => user.id == sliderUser.id)) + 1;
    if (nextUserIndex >= users.length) {
      nextUserIndex = 0;
      nextUser = users[nextUserIndex];
    }
    nextUser = users[nextUserIndex];
    setSliderUser(nextUser);
  }
  function handlePrev(e) {
    let prevUser;
    let prevUserIndex =
      users.indexOf(users.find((user) => user.id == sliderUser.id)) - 1;
    if (prevUserIndex < 0) {
      prevUserIndex = users.length - 1;
      prevUser = users[prevUserIndex];
    }
    prevUser = users[prevUserIndex];
    setSliderUser(prevUser);
  }
  return (
    <section className="container">
      <article className="slider">
        <div className="slider__item slider__item--quotes">
          <div className="slider__quotes">
            <img className="slider__bg slider__bg--quotes" src={bgQuotes} />
            <q className="slider__quotes__text">
              {sliderUser ? sliderUser.testimonial : ""}
            </q>
            <p className="slider__quotes__author">
              <span className="slider__quotes__author__name">
                {sliderUser ? sliderUser.fullname : "anonymous"}
              </span>
              <span className="slider__quotes__author__occupation">
                {sliderUser ? sliderUser.occupation : "unknown"}
              </span>
            </p>
          </div>
        </div>

        <div className="slider__item slider__item--figure">
          <figure className="slider__figure">
            <img className="slider__bg slider__bg--figure" src={bgPattern} />
            <div className="slider__figure__wrapper">
              <div
                className="slider__figure__img"
                style={{
                  backgroundImage: `url('${
                    sliderUser ? sliderUser.image : null
                  }')`,
                }}
              ></div>
              <div className="slider__controls">
                <button
                  onClick={handlePrev}
                  className="slider__controls__btn slider__controls__btn--prev"
                >
                  <img src={iconPrev} alt="" />
                </button>
                <button
                  onClick={handleNext}
                  className="slider__controls__btn slider__controls__btn--next"
                >
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
