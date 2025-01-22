import { PropsWithChildren } from "react";

export default function Header({ children }: PropsWithChildren) {
  return (
    <div className="prose"><h1 className=" pl-10 py-4">{children}</h1></div>
  )
}