import { FC } from 'react'
import { IErrorProps } from '../type'

export type IErroDefault = FC<{
  [P in keyof IErrorProps]?: IErrorProps[P];
}>

const ErrorDefault: IErroDefault = ({
  title = 'ERROR ;(',
  message = 'Sorry, but something went wrong',
  className,
  ref
}) => (
  <div
    className={`relative h-[50vh] lg:h-[50vh] w-full ${className}`}
    data-testid="Error"
    ref={ref ?? null}
  >
    <p className="text-red-600 text-2xl absolute left-[50%] top-[50%] ml-[-150px] mt-[-125px] md:mt-[-50px] max-w-[300px] mx-auto text-center">
      <span className="text-5xl mb-6 font-bold inline-block">
        {title}
      </span>
      <br />
      {message}
    </p>
  </div>
)


export { ErrorDefault }
