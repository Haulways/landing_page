import { Link } from "react-router-dom";

export default function Button(props){
    return(
        <Link to={props.link} className={"xui-btn haulway-btn xui-font-w-500 xui-font-sz-80 xui-mt-1 xui-d-inline-flex xui-bdr-rad-5 " + props.customStyle}>
            <p className="xui-m-auto xui-pr-half haulway-btn-text" data-text={props.customText}>{props.customText}</p>
            {props.children}
        </Link>
    );
}