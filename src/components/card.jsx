import { Link } from '@reach/router';
import axios from 'axios';
import React from 'react';

const Card = props => {
    const { pirate } = props;
    const { reload, update } = props;
    
    const clickHandler = () => {
        axios.delete(`http://localhost:8000/api/${pirate._id}`)
            .then(res => {
                console.log(res);
                update();
            })
            .catch(err => console.log(err))
    }


    return (
        <div class="card">
            <div class="card-body d-flex">
                <img src={pirate.image} alt={pirate.name} style={{height: "150px", marginRight: '20%'}} />
                <div className="container">
                    <h1 style={{marginLeft: '10%', marginBottom: '50px'}}> {pirate.position}&nbsp;{pirate.name}</h1>
                    <Link to={`/pirate/${pirate._id}`}><button className="btn btn-primary" style={{padding:"10px 30px", marginRight: "50px"}}>View Pirate</button></Link>
                    <button className="btn btn-danger" style={{padding:"10px 30px"}} onClick={() => { clickHandler() }}>Walk the Plank</button>
                </div>
                
            </div>
        </div>
    );
}
export default Card;