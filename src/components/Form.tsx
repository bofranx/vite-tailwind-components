import { PropsWithChildren } from "react"



const Form = ({ children }: PropsWithChildren) => {
  return (
    <form className="flex flex-col space-y-4 m-2 max-w-sm">
      {children}
    </form>
  )
}

export default Form