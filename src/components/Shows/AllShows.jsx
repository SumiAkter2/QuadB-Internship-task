
import'./Shows.css';
import { Link,useNavigate } from 'react-router-dom';
const AllShows = (props) => {
    const { show } = props.allShow;
   const navigate = useNavigate();
    return (
        <div>
            <Link onClick={() => {
                navigate(`/${show?.id}`)
            }}>
                
                <div className="shows-content ">
   
                <img src={show.image?.original} alt="show-img" />
                <div className='d-flex pt-2 justify-content-between align-items-center '>
                <div>
                <h3>{show?.name}</h3>
                <p>Genres: {show?.genres}</p>
                
                    </div>
                
               </div>
        </div>
            </Link>
        </div>
    );
};

export default AllShows;