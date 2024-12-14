
const Paragraph = ({ children, className, medium, semibold, bold, darkBlue, sm, lg, xl, xxl, leadingFull }) => {

  const fontSize = medium ? "font-medium" : semibold ? "font-medium" : bold ? "font-bold" : "font-normal"
  const textColor = darkBlue ? "deep-sea-green" : "light-black"
  const textSize = sm ? "text-sm" : lg ? "text-lg" : xl ? "text-xl" : xxl ? "text-xxl" : "text-base"
  const lineHeight = leadingFull ? "leading-full" : "leading-140"

  return <p className={`${className ? className : ""} ${fontSize} ${textColor} ${textSize} ${lineHeight} ${center ? "text-center" : "text-start"}`}>{children}</p>
}

export default Paragraph