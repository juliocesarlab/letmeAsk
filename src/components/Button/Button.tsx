import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({isOutlined = false, ...props}: ButtonProps & {
  isOutlined ?: boolean
}) => {
  return (
    <ButtonStyle>
      <button className={`button ${isOutlined ? 'outlined': ''}`} {...props} />
    </ButtonStyle>
  )
}
   

