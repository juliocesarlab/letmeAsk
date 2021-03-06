import { StyledQuestion } from "./style";
import { ReactNode } from "react";
import { useTheme } from '../../hooks/useTheme'

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export const Question = ({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) => {
  
  const { theme } = useTheme()

  return (
    <StyledQuestion
      className=
      {`${isAnswered ? "answered" : ""} 
      ${isHighlighted && !isAnswered ? "highlighted" : ""} 
      ${theme === 'dark' ? 'dark' : ''}`}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </StyledQuestion>
  );
};
