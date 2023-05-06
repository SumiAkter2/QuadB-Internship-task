import'./Shows.css';
const AllShows = (props) => {
    const { show,  } = props.allShow;
   
    return (
        <div>
            <div className="shows-content ">
                {/* <h1>{show.id}</h1> */}
                <img src={show.image?.original} alt="" />
                <h3>{show?.name}</h3>
                <p>Genres: {show?.genres}</p>
                {/* <p>{show?.schedule?.summary}</p> */}
        </div>
        </div>
    );
};

export default AllShows;