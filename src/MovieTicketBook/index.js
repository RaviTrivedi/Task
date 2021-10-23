import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

function MovieTicketBook(props) {

    let [singleShows, setSingleShows] = useState([]);
    console.log("singleShow-->> ", singleShows);


    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");

        let singleShow = response.data.filter((item) => {
            if (item.show.id == window.location.pathname.split("/")[2]) {
                return item;
            }
        })
        setSingleShows([...singleShow]);
    }


    return (
        <div className="MovieTicketBook">
            {singleShows.map((data) => {
                return (
                    <div className="card mb-3" style={{ 'maxWidth': '540px' }}>
                        <div className="row g-0">
                           
                            <div className="col-md-12">
                                <div className="card-body">
                                    <h4 className="card-title">{data.show.name}</h4>
                                    <p className="card-text">{data.show.summary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}

export default MovieTicketBook;
