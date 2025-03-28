import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from 'react';
import { lineChartData } from '../data/Soildata';

export const AiInference = () => {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_REACT_API_KEY
  const genAI = new GoogleGenerativeAI(API_KEY)

  const dataOne = [...lineChartData.datasets[0].data];
  const labelOne = lineChartData.datasets[0].label;
  const dataTwo = [...lineChartData.datasets[1].data];
  const labelTwo = lineChartData.datasets[1].label;
  const dataThree = [...lineChartData.datasets[2].data];
  const labelThree = lineChartData.datasets[2].label;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchData = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `Analyze the following soil health data for the past week, consisting of temperature (°C), humidity (%), and soil moisture (%). Provide a brief, actionable summary of the trends and their impact on soil health based on the data: ${labelOne} ${dataOne} ${labelTwo} ${dataTwo} ${labelThree} ${dataThree}, Give a short summary (3-4 sentences) highlighting the overall soil health and recommendations for irrigation or soil care. dont bold the title or text`
      const result = await model.generateContent(prompt);
      await sleep(1000);
      setIsLoading(false)
      setResponse(result.response.text());
    } catch (error) {
      console.log(error);
      setResponse("Error fetching data");

    }
  }

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <div className="mt-5 w-[95%] flex flex-col rounded-lg px-4 pb-4 items-center bg-white h-[300px]">
      <div className="flex justify-between w-full h-[20%] items-center">
        <h1 className="font-semibold">AI Summary</h1>
        <DotLottieReact
          src="https://lottie.host/858f9d09-390b-4dca-83f3-58b62380a3f1/6EOvvsNKXN.json"
          loop
          autoplay
          className="w-24 h-24 mr-[-30px]"
        />
      </div>
      <div className="flex w-[99.5%] p-4 rounded-md bg-[#8080801a] overflow-y-auto h-[80%]">
        <span className="w-full h-max max-h-full overflow-y-auto">
          {isLoading ? <DotLottieReact
            src="https://lottie.host/84b29f64-08a4-4073-8f17-8e3e578a92b6/UPR6ahml8E.json"
            loop
            autoplay
          /> : response}
        </span>
      </div>
    </div>
  );
};
