export default function Starlight(props){
    return(
        <>
        <svg width={props.width} height={props.height} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39 30C39 34.9706 34.9706 39 30 39C25.0294 39 21 34.9706 21 30C21 25.0294 25.0294 21 30 21C34.9706 21 39 25.0294 39 30Z" fill={props.fill}/>
        <path d="M25 0H35V60H25V0Z" fill={props.fill}/>
        <path d="M0 35V25H60V35H0Z" fill={props.fill}/>
        <path d="M5 12.0711L12.0711 5.00001L54.4975 47.4264L47.4264 54.4975L5 12.0711Z" fill={props.fill}/>
        <path d="M54.4975 12.0711L47.4264 5.00001L5 47.4264L12.0711 54.4975L54.4975 12.0711Z" fill={props.fill}/>
        </svg>
        </>
    );
}