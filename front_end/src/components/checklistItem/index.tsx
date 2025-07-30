import './index.scss'
import { Sun,Check } from 'lucide-react';

export default function CheckListItem() {
    return (
        <div className='checklist-item'>
            <div className='checklist-item-container'>
                <Sun 
                    width="1.125rem" 
                    height="1.125rem" 
                    color="#3478C6"/>
            </div>
            <div className='checklist-item-title-container'>
                <span className='checklist-item-title'>Morning Routine</span>
                <span className='checklist-item-description'>5:30 AM - 7:00 AM</span>
            </div>
            <div className='checklist-item-check'>
                <Check 
                    width="1.125rem" 
                    height="1.125rem" 
                    color="#43B072"/>
            </div>
        </div>
    )
}