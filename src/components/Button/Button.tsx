import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./style";
import { useTheme } from "../../hooks/useTheme"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({isOutlined = false, ...props}: ButtonProps & {
  isOutlined ?: boolean
}) => {

  const { theme } = useTheme()

  return (
    <ButtonStyle>
      <button className={`button 
      ${isOutlined ? 'outlined': ''}
      ${theme=== 'dark' ? 'endRoomButtonDark' : ''}`} {...props} />
    </ButtonStyle>
  )
}
   

