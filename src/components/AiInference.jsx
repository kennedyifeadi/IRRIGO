import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export const AiInference = () => {
  return (
    <div className="mt-5 w-[95%] flex flex-col rounded-lg px-4 pb-4 items-center bg-white h-[300px]">
      <div className="flex justify-between w-full h-[20%] items-center">
        <h1 className='font-semibold'>AI Summary</h1>
        <DotLottieReact
      src="https://lottie.host/858f9d09-390b-4dca-83f3-58b62380a3f1/6EOvvsNKXN.json"
      loop
      autoplay
      className='w-24 h-24 mr-[-30px]'
    />
      </div>
      <div className="flax w-[99.5%] p-4 rounded-md bg-[#80808059] overflow-y-auto h-[80%]">
        <span className='w-full h-max max-h-full overflow-y-auto border border-black'>frgewgeqgewgewgewrgr</span>
      </div>
    </div>
  )
}
