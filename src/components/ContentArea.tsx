import { PropsWithChildren } from "react";

export default function ContentArea({ children }: PropsWithChildren) {
  return (
    <div className="flex-1 container">{children}</div>
  )
}