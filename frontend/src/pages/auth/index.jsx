import { GraduationCap } from "lucide-react"
import { Link } from "react-router-dom"

function AuthPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to={"/"}
        className="flex items-center justify-center "
        > 
        <GraduationCap className="h-8 w- mr-4" />
        </Link>
      </header>
      
    </div>
  )
}

export default AuthPage
