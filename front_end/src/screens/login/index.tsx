import './index.scss'
import { Weight,UserRound,Lock   } from 'lucide-react'

export default function LoginPage() {
    return (
        <main className="loginPage-container">
            <section className='loginPage-mainContainer'>
                <div className='loginPage-titleContainer'>
                    <Weight height={32}/>
                    <h3>Habit Forge</h3>
                </div>
                <div className="loginPage-loginArea">
                    <h1>Login Area</h1>
                    <div className='loginPage-inputArea'>
                        <input type="text" className='loginPage-loginInput'/>
                        <UserRound height={22}/>
                    </div>
                    <div className='loginPage-inputArea'>
                        <input type="text" className='loginPage-passwordInput'/>
                        <Lock height={22}/>
                    </div>
                    <div className='loginPage-loginOptions'>
                        <span>Forgot My Password</span>
                        <div className='loginPage-remeberMeContainer'>
                            <span>Remember-Me</span>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <button className='loginPage-loginButtonContainer'>
                        <span>Login</span>
                    </button>
                </div>
            </section>
        </main>
    )
}