import { AlertCircle } from "lucide-react";

export default function ErrorMessage(Error:{Error:string}) {
    return (
        
        <div className="bg-red-900/30 border border-red-600 rounded-lg p-4 max-w-md mx-auto mb-6 flex items-center">
            <AlertCircle className="mr-3 text-red-500" />
            <p className="text-red-300">{Error.Error}</p>
          </div>
    )
}