import React from 'react';
import useWork from '../../Hooks/useWork';
import Work from '../Work/Work';

const OurWork = () => {
    const [work]=useWork()
    return (
        <div className="container my-5">
                <h3>Our Work</h3>
            <div className="row gy-5">
                 {
                    work.map(wk => <Work
                        key={ wk._id }
                        work={wk}
                    ></Work>)
                }
           </div>
        </div>
    );
};

export default OurWork;