import './styles.css'

export const Title = (props) => {
    return <h1 className="Title">{props.greentitle ? <span>{props.greentitle}</span> : null} {props.title}</h1>;
  }