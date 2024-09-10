export default function AnimationUnderline(props: {
  word: string,
  className: string,
}) {
  return (
    < >
      <span className="text-blue-700 p-2.5">
        {props.word}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" className={`fill-current h-16 ${props.className} text-blue-700 absolute top-0 left-1/2 -translate-x-1/2 underline`}>
        <path d="M.68,140.11c110.31-22,247.46-34.55,400.89-14.68,32.94,4.27,64.42,9.74,94.37,16.09"
          fill="none" stroke="currentColor" strokeWidth="12" >
        </path>
      </svg>
    </>
  )
}