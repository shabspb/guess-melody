import React from 'react';

const GenreQuestionScreen = () => {
  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"></img>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            styleName="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1"></input>
              <label className="game__check" htmlFor="answer-1">Отметить</label>
            </div>
          </div>

          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2"></input>
              <label className="game__check" htmlFor="answer-2">Отметить</label>
            </div>
          </div>Name

          <div className="track">
            <button className="track__button track__button--pause" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3"></input>
              <label className="game__check" htmlFor="answer-3">Отметить</label>
            </div>
          </div>

          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4"></input>
              <label className="game__check" htmlFor="answer-4">Отметить</label>
            </div>
          </div>

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

export default GenreQuestionScreen;
