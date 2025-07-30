import './index.scss'
import { Search } from 'lucide-react'

export default function SearchBar() {
    return (
        <div className="input-area">
            <input type="text" className='search-bar' placeholder="Search..."/>
            <Search size={18} color="#B6BBC3" className="search-icon"/>
        </div>
    )
}