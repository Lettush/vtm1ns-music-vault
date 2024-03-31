import ReactPlayer from "react-player/youtube";

const YouTube = ({link}) => {
    return (
        <ReactPlayer url={link} />
    )
}

export default YouTube;