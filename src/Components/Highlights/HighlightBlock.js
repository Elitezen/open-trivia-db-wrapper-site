import './HighlightBlock.scss';

export default function HighlightBlock({
  iconSrc,
  text
}) {
  const altText = text.slice(0, 15);

  return (
    <div class="highlight-block">
      <figure>
        <img 
          src={iconSrc} 
          alt={altText} 
          draggable="false"/>

        <figcaption>
          <p> {text} </p>
        </figcaption>
      </figure>
    </div>
  );
}