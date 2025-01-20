import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string

}
function usePosts() {
  return useQuery({
    queryKey: ['posts'], queryFn: async (): Promise<Post[]> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')

      return await response.json()
    }
  })
}

export default function Placeholder() {

  const { data, error, status } = usePosts()
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className="container mx-auto prose ">
      <h1 onClick={() => setToggle((prevState: boolean) => !prevState)}>Posts</h1>
      {status === 'pending' ? (
        "Loading..."
      ) : status === 'error' ? (
        <span>Error loading data: {error.message}</span>
      ) : (
        <div>
          {data.map((post) => (
            <div className="relative card card-compact bg-base-100 my-2 shadow-xl hover:translate-x-4 transition-all" key={post.id}>
              <div className="w-1/3 absolute left-0 h-full bg-gradient-to-l from-transparent to-red-400 opacity-0 hover:opacity-50 rounded-l-box transition-all duration-500"></div>
              <div className="w-1/3 absolute right-0 h-full bg-gradient-to-r from-transparent to-green-400 opacity-0 hover:opacity-50 rounded-r-box transition-all duration-500 "></div>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <button className="card-actions justify-end">Go</button>
              </div>
            </div>
          ))}
        </div>

      )

      }


    </div>
  )
}
