import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    setShows(response.data);
  }

  return (
    <div className="App">
      <div className="row row-cols-1 row-cols-md-4 g-4">

        {
          shows.map((data) => {
            return (
              <div className="col">
                <div className="card">
                  <img src={data.show.image.original} className="card-img-top showImg" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.show.name}</h5>
                    <p className="card-text">{data.show.language}</p>
                    <Link className="btn btn-primary" to={`/summary/${data.show.id}`} role="button">Summary</Link>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
