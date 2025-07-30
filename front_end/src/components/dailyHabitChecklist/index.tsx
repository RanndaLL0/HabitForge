import './index.scss'
import { Calendar } from 'lucide-react'
import CheckListItem from '../checklistItem'

export default function DailyHabitChecklist() {
    return (
        <section className='checklist-container'>
            <div className='checklist-header'>
                <p className='checklist-header-text'>Daily Habits</p>
                <div className='checklist-icon-container'>
                    <Calendar height="20px" width="20px" color="#338FF7"/>
                    <span className='checklist-icon-title'>Today's Progress</span>
                </div>
            </div>
            <div className='checklist-content-container'>
                <CheckListItem/>
                <CheckListItem/>
                <CheckListItem/>
                <CheckListItem/>
            </div>
        </section>
    )
}