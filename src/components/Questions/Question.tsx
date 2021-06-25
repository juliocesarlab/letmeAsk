import { StyledQuestion } from './style'
import { ReactNode } from 'react'

type QuestionProps = {
  content: string,
  author: {
    name: string;
    avatar: string
  }
  children?: ReactNode;
}

export const Question = ({
  content,
  author,
  children
}: QuestionProps) => {
  
  return(
    <StyledQuestion>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </StyledQuestion>
  )
}