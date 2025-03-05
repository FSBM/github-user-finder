import { UserCircle } from "lucide-react"

export default function Loader() {
    return (
        <div className="flex justify-center items-center mb-6 ">
                    <div className="animate-spin mr-3">
                      <UserCircle size={32} />
                    </div>
                    <p>Searching for users...</p>
        </div>
    )
}