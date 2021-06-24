import React, {Component} from 'react';
import CurrentWeatherDisplay from './DisplayFunc';

type WeatherState={
    // temp: string ;
    // humidity: string;
    // wind: string;
    // clouds: string;
    locationWeather: {
        main: {
            temp: string;
            humidity: string
        },
        clouds:{
            all: number
        },
        wind:{
            speed: number
        }
    }
    currentLat: number;
    currentLong: number;
}

type Geolocation={
    coords: {
        latitude: number;
        longitude: number;
    }; 
}
export default class CurrentWeather extends Component<{}, WeatherState>{
    constructor(props: {}){
        super(props);
        this.state = { 
            locationWeather:{
                main:{
                    temp:'', humidity:''
                },
                clouds:{
                    all: 1
                },
                wind:{
                    speed: 1
                }
            }, 
            currentLat: 1, 
            currentLong: 2, 
            // temp: '', 
            // humidity:'', 
            // wind: '',
            // clouds: ''
            }
        this.success = this.success.bind(this)
    }
    success(pos: Geolocation) {
        console.log(pos);
        let crd = pos.coords;
        this.setState({currentLat: crd.latitude, currentLong: crd.longitude});
        console.log(this.state.currentLat, this.state.currentLong);
    }
    
    // * will need an api key to test (submitted in canvas comments)
    weatherFetch (){
        let API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.currentLat}&lon=${this.state.currentLong}&units=imperial&appid=${API_KEY}`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then((resData) =>{
            this.setState({locationWeather: resData})
        })
        .then(()=>{console.log('location weather:', this.state.locationWeather)})
        .catch(err => console.log(err))
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.success);
        this.weatherFetch();
    }

    render(){
        return(
            <div>
            <CurrentWeatherDisplay locationWeather={this.state.locationWeather}/> 
            </div>
        )
    }
}
