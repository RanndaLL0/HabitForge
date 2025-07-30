import './index.scss'
import { Plus } from 'lucide-react'

export default function AddCard() {
    return (
        <div className="addCard-container">
            <div className='addCard-content-container'>
                <div className='logo-container'>
                    <Plus color="#E72987"/>
                </div>
                <h3 className='addCard-title'>Create new goal</h3>
                <span className='addCard-description'>Set up a new goal to track your progress</span>
                <button className='addCard-button'>
                    <span className='addCard-button-text'>
                        Get Started
                    </span>
                </button>
            </div>
        </div>
    )
}