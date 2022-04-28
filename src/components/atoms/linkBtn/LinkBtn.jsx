import './styles.css'

export const LinkBtn = (props) => {
    return (
        <a href={props.link} className="btn btn_link">
            {props.children}
            <i>&rarr;</i>
        </a>
    );
}