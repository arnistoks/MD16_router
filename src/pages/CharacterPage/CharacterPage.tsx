import '../../data/styles.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Character, getCharacter } from '../../data/CharacterData';

const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const character = getCharacter(Number(id));
    if (character) {
      setCurrentCharacter(character);
    } else {
      navigate('/characters');
    }
  }, []);

  return (
    <section className="section">
      <div className="container page404__container">
        <div className="card card__current">
          <div>
            <img className="image" src={currentCharacter?.image} alt="Charachter" width="300" />
          </div>
          <div className="card__column">
            <div>
              <span>Name: </span>
              <span className="name">
                {currentCharacter?.name}
              </span>
            </div>
            <div>
              <span>Status: </span>
              <span className="info">
                {currentCharacter?.status}
              </span>
            </div>
            <div>
              <span>Species: </span>
              <span className="info">
                {currentCharacter?.species}
              </span>
            </div>
            <div>
              <span>Type: </span>
              <span className="info">
                {currentCharacter?.type === '' ? '-' : currentCharacter?.type}
              </span>
            </div>
            <div>
              <span>Gender: </span>
              <span className="info">
                {currentCharacter?.gender}
              </span>
            </div>
            <div>
              <span>Origin: </span>
              <span className="info">
                {currentCharacter?.origin.name}
              </span>
            </div>
            <div>
              <span>Location: </span>
              <span className="info">
                {currentCharacter?.location.name}
              </span>
            </div>
            <div>
              <span>Created: </span>
              <span className="info">
                {currentCharacter?.created}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterPage;
