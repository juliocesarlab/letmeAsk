import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return (
    <ButtonStyle>
      <button className="button" {...props} />
    </ButtonStyle>
  )
}
   

