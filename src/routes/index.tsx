import { useState } from 'react'

export const Route = createFileRoute({
  component: Index,
})

function Index() {
  const [data, setData] = useState(0)
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-red-300 p-2 text-white">
      <h3>Welcome Home!</h3>
      <button type="button" onClick={() => setData(data + 1)}>
        Click me
      </button>
      <p>{data}</p>
    </div>
  )
}
