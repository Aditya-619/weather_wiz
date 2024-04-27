import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io"
import axios from 'axios'
import cloudImg from '../assets/weather-assests/Assets/cloud.png'
import humidityImg from '../assets/weather-assests/Assets/humidity.png'
import windImg from '../assets/weather-assests/Assets/wind.png'
import clearImg from '../assets/weather-assests/Assets/clear.png'
import rainImg from '../assets/weather-assests/Assets/rain.png'
import drizzleImg from '../assets/weather-assests/Assets/drizzle.png'
import mistImg from '../assets/weather-assests/Assets/snow.png'

const Home = () => {

    const [data, setData] = useState({
        celcius: 10,
        name: "New Delhi",
        humidity: 10,
        speed: 2,
        image: cloudImg
    });

    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            if (name !== '') {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.API_KEY}&units=metric`);
                const data = response.data;
                let setImage = '';
                if (data.weather[0].main == "Clouds") {
                    setImage = cloudImg
                } else if (data.weather[0].main == "Clear") {
                    setImage = clearImg
                } else if (data.weather[0].main == "Rain") {
                    setImage = rainImg
                } else if (data.weather[0].main == "Drizzle") {
                    setImage = drizzleImg
                } else if (data.weather[0].main == "Mist") {
                    setImage = mistImg
                } else {
                    setImage = cloudImg
                }
                setData({
                    ...data,
                    celcius: data.main.temp,
                    name: data.name,
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                    image: setImage
                });
            }
        } catch(err) {
            if(err.response.status == 404) {
                setError("Invalid location");
            } else {
                setError('');
            }
        }
    }

    return (
        <>
            <div className="container">
                <div className="weather">
                    <div className="search">
                        <input type="text" placeholder='search' onChange={e => setName(e.target.value)} />
                        <IoIosSearch className='search-icon' onClick={handleSearch} />
                    </div>

                    <div className="error">
                        {error}
                    </div>

                    <div className="weather-info">
                        <img src={data.image} alt="" />
                        <h1>{Math.round(data.celcius)}°C</h1>
                        <h2>{data.name}</h2>
                        <div className="details">
                            <div className="col">
                                <img src={humidityImg} alt="" />
                                <div className="col-info">
                                    <p>{Math.round(data.humidity)}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="col">
                                <img src={windImg} alt="" />
                                <div className="col-info">
                                    <p>{data.wind} km/h</p>
                                    <p>wind</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home