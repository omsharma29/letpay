import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="flex items-center bg-[#1C1B3B] rounded-full p-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search for anything..."
        className="flex-1 bg-transparent text-gray-400 placeholder:text-gray-400 focus:outline-none px-4"
      />
      <Search className="text-gray-400 h-5 w-5 mr-4 cursor-pointer" />
    </div>
  )
}