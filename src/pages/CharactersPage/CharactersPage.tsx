import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Character, getCharacters } from '../../data/CharacterData';

const CharactersPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const characters = getCharacters();
    setVisibleCharacters(characters);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Characters</h1>
        <div className="box">
          {visibleCharacters && visibleCharacters.map(({
            id, name, image,
          }) => (
            <div
              className="card"
              key={Math.random()}
            >
              <div>
                <img src={image} alt="Character" width="300" />
              </div>
              <div className="card__row">
                <span className="card__title">
                  {name}
                </span>
                <button className="card__button" onClick={() => navigate(`/characters/${id}`)}>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersPage;
