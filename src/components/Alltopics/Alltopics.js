import { Link } from 'react-router-dom';
import './Alltopics.css';

const Alltopics = (props) => {
    const data = props.data;
    const {id,name,logo}=data;

    return (
        <div>
           <div className="alltopic-container">
           <img src={logo} alt="" />
            <p>{name}</p> 
            <Link to={`/quiz/${id}`}> <button>Click</button></Link>

           </div>
            
        </div>
    );
};

export default Alltopics;