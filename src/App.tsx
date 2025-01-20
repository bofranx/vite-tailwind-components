import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Form from "./components/Form"
import FormInput from "./components/FormInput"
import Placeholder from "./components/Placeholder"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Placeholder />
    </QueryClientProvider>
  )
}

export default App
