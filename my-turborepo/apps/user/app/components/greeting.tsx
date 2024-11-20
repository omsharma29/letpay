export default function Greeting({ 
    name = "Om",
    message = "Here's what's happening with your store today.",
    emoji = "👋"
  }: { 
    name?: string
    message?: string
    emoji?: string
  }) {
    return (
      <div className="flex flex-col gap-1 p-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          Welcome Back, {name} <span className="text-yellow-400">{emoji}</span>
        </h2>
        <p className="text-gray-400 text-sm font-normal">
          {message}
        </p>
      </div>
    )
  }