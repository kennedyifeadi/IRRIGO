import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'

export const Weather = () => {
  const popoverRef = useRef(null);
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const [windSpeed, setWindSpeed] = useState("")
    const [condition, setConditon] = useState("")
    const [temperature, setTemperature] = useState("")
    const [pressure, setPressure] = useState("")
    const [humidity, setHumidity] = useState("")
    const [windDirection, setWindDirection] = useState("")
    const [forcastDay, setForcastDay] = useState("")
    const [forcastHour, setForcastHour] = useState([])
    const [forcastHourTemp, setForcastHourTemp] = useState([])
    const [forcastHourText, setForcastHourText] = useState([])
    const [forcastHourWinSpeed, setForcastHourWindSpeed] = useState([])
    const [forecastPressure, setForecastPressure] = useState([])
    const [forecastHumidity, setForecastHumidity] = useState([])
    const [forecastWindDirection, setForecastWindDirection] = useState([])
    const weatherAPI = "https://api.weatherapi.com/v1/forecast.json?key=a4f33c6a6aa4444a949135854241011&q=ibadan&days=2&aqi=yes&alerts=yes"


    const fetchData = async ()=>{
        const res = await axios.get(weatherAPI)
        const data = res.data
        const forecastDay = data.forecast.forecastday[1].date
        const currentCondition = data.current.condition.text
        const currentWindDirection = data.current.wind_dir
        const currentWindSpeed = data.current.wind_mph
        const currentTemperature = data.current.temp_c
        const currentPressure = data.current.pressure_in
        const currentHumidity = data.current.humidity

        setWindSpeed(currentWindSpeed)
        setConditon(currentCondition)
        setTemperature(currentTemperature)
        setWindDirection(currentWindDirection)
        setPressure(currentPressure)
        setHumidity(currentHumidity)
        setForcastDay(forecastDay)

        const forecastHourArray = []
        const forcastHourTempArray = []
        const forcastHourTextArray = []
        const forcastHourWinSpeedArray = []
        const forecastPressureArray = []
        const forecastHumidityArray = []
        const forecastWindDirectionArray = []


        for(let i = 0; i < 24 ; i = i + 6){

        const forecastHour = data.forecast.forecastday[1].hour[i].time
        forecastHourArray.push(forecastHour)

        const forecastHourtext = data.forecast.forecastday[1].hour[i].condition.text
        forcastHourTextArray.push(forecastHourtext)

         const pressure = data.forecast.forecastday[1].hour[i].pressure_in
         forecastPressureArray.push(pressure)

         const temperature = data.forecast.forecastday[1].hour[i].temp_c
         forcastHourTempArray.push(temperature)

         const windSpeed = data.forecast.forecastday[1].hour[i].wind_mph
         forcastHourWinSpeedArray.push(windSpeed)

         const windDirection = data.forecast.forecastday[1].hour[i].wind_dir
         forecastWindDirectionArray.push(windDirection)

         const humidity = data.forecast.forecastday[1].hour[i].humidity
         forecastHumidityArray.push(humidity)

        }
            setForcastHour([...forecastHourArray])
            setForcastHourText([...forcastHourTextArray])
            setForcastHourTemp([...forcastHourTempArray])
            setForcastHourWindSpeed([...forcastHourWinSpeedArray])
            setForecastPressure([...forecastPressureArray])
            setForecastHumidity([...forecastHumidityArray])
            setForecastWindDirection([...forecastWindDirectionArray])
    }

    const togglePopover = () => {
      setIsPopoverVisible((prev) => !prev);
    };

    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverVisible(false); // Hide popover if clicked outside
      }
    };

    useEffect(() => {
      // Attach event listener to document on mount
      document.addEventListener("mousedown", handleClickOutside);
  
      // Clean up event listener on unmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    useEffect(()=>{
        fetchData()
    }, [])

  return (
   <div className='flex items-center justify-center '>
     <div onClick={togglePopover} className='relative py-1 px-2 flex flex-col shadow-md rounded-md bg-white justify-center items-center active:scale-75 duration-300 ease-in-out cursor-pointer'>
        <DotLottieReact
        src="https://lottie.host/6b83a545-e797-4256-9665-7d815900e45e/bGBCP1bbTe.json"
        loop
        autoplay
        className="w-15 h-10 "
        />


        <span className='text-[10px] max-w-[100px] text-[#F9A825] font-semibold '>{condition} {temperature}°C</span>
    </div>
    {isPopoverVisible && (
      <div ref={popoverRef}  className='fixed p-4  duration-300 ease-in-out top-[20dvh] left-5 w-[350px] bg-white shadow-md h-[400px]  rounded-md'>
        <h1>Location</h1>
        {
          
        }

      </div>
    )}
   </div>
  )
}
