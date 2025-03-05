
import { Search } from "lucide-react";
interface Props{
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: (e: React.FormEvent) => void
}



export default function SearchBar({query, setQuery, handleSearch}: Props) {
    return (
        <form onSubmit={handleSearch} className="w-[300px] mx-auto">
            <div className="flex">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search GitHub Users..."
                className="flex-grow px-4 py-2 bg-[#161b22] border border-gray-400 rounded-l-lg  focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-gray-300 hover:bg-white text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                <Search size={24} color="black"/>
              </button>
            </div>
          </form>
    )
}