import React from 'react';
import { Link } from 'react-router-dom';

const Stock = () => {
    return (
        <section className='p-4'>
            <div className="title">
                <div className="flex gap-4 items-center">
                    <h2 className="font-bold md:text-[1.5rem] text-center">All Stock</h2>
                </div>
                <div className="divider my-2"></div>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-center">
                    <Link to="/user/beerstock" className="commonBtn ">
                        Bear Stock
                    </Link>
                    <Link to="/user/winestock" className="commonBtn ">
                        Wine Stock
                    </Link>

                    <Link className="commonBtn" to="/user/rmlstock">
                        RML Stock
                    </Link>
                </div>
            </div>

        </section >
    );
};

export default Stock;