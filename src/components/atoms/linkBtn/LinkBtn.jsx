import './styles.css'

export function LinkBtn(props) {
    return (
        <a href={props.link} className="btn btn_link">
            {props.linkName}
            <i>&rarr;</i>
        </a>
    );
}