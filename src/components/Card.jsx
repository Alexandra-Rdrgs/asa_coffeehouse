export default function Card({ imageSource, title, link }) {
    return (
      <div className="card_container">
        <img src={imageSource} alt="Cover image" className="card_image" />
        <h3 className="card_name">{title}</h3>
        <a href={link} className="card_link">
          ...
        </a>
      </div>
    );
  }
  