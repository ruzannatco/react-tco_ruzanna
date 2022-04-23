import './styles.css'

export function Img(props) {
    return <img className="Img" src={props.src} alt={props.description}/>;
  }