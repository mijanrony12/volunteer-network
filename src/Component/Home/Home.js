import React from 'react';
import useWork from '../../Hooks/useWork';
import Work from '../Work/Work';
import './Home.css'
const Home = () => {
    const [ work ] = useWork()
    console.log(work);
    return (
        <div className="container my-5">
                   <h3>Our Work</h3>
                <div className="row gy-5">
                      {
                    work.slice(0,8).map(wk => <Work
                        key={ wk._id }
                        work={wk}
                    ></Work>)
                       }
               </div>
        </div>
    );
};

export default Home;