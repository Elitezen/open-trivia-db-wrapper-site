import './Highlights.scss';
import HighlightBlock from './HighlightBlock';

import ListCheck from '../../Assets/Icons/list-check.svg';
import PeopleFill from '../../Assets/Icons/people-fill.svg';
import TextParagraph from '../../Assets/Icons/text-paragraph.svg';

export default function Highlights() {
  return (
    <div id="highlights">
      <h2>
        Why This Wrapper is The Best
      </h2>

      <div id="highlights-row">
        <HighlightBlock iconSrc={ListCheck} text="Fully Typed and Described with TypeScript" />
        <HighlightBlock iconSrc={PeopleFill} text="Maintained and Improved with Updates" />
        <HighlightBlock iconSrc={TextParagraph} text="Fully Documented on GitHub" />
      </div>
    </div>
  );
};