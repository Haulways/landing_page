export default function Plus(props){
    return(
        <>
        <svg width={props.width} height={props.height} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" width="20" height="60" fill={props.fill}/>
        <rect y="40" width="20" height="60" transform="rotate(-90 0 40)" fill={props.fill}/>
        </svg>
        </>
    );
}