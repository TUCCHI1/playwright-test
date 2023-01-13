import { useState } from "react"

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="hidden md-block">You clicked {count} times</p>
      <p className="md-hidden">{count}</p>
      <button>Click me</button>
    </div>
  )
}

export default Counter;