import './Showcase.scss';
import logo from '../../Assets/Images/opentdb_logo.png';

const URL_OPENTDB = 'https://opentdb.com/';

export default function Showcase() {
  const redirect = (url = '') => {
    alert(url);
  };

  return (
    <div id="showcase">
      <img 
        src={logo} 
        alt="Open Trivia Database Logo"
        draggable="false"
        onClick={() => redirect(URL_OPENTDB)}/>

      <article>
        <p>
          open-trivia-db is a small, simple and fast wrapper for 
          <span onClick={() => redirect(URL_OPENTDB)}> Open Trivia Database </span>- A 
          Free to use, user-contributed trivia question database. Built with TypeScript, 
          works with VanillaJS.
        </p>
      </article>
    </div>
  )
}