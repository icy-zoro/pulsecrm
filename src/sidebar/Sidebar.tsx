import './Sidebar.css'
import plusIcon from '../assets/plus-mini.svg'
import { useCallback, useRef } from 'react'

export default function Sidebar() {
    const sidebarRef = useRef<HTMLBaseElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    const handleCardClose = useCallback(() => {
        cardRef.current?.classList.add('hidden')
    }, [])

    return (
        <aside ref={sidebarRef}>
            <nav>
                <div className='group'>
                    <button className='btn-primary flex-1'>
                        <div className='btn-inner'>
                            <span className='icon'>
                                <img src={plusIcon} alt='Plus icon' />
                            </span>
                            <span className='text'>Create new channel</span>
                        </div>
                    </button>
                </div>
                <div className='group'>
                    <span className='title'>Main</span>
                    <ul>
                        <li>
                            <a href='#'>
                                <span className='icon'>
                                    <img src='/icons/stats.svg' alt='Statistics icon' />
                                </span>
                                <span className='text'>Statistics & reports</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className='icon'>
                                    <img src='/icons/channels.svg' alt='Channels icon' />
                                </span>
                                <span className='text'>Channels</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className='icon'>
                                    <img src='/icons/workspace.svg' alt='Workspace icon' />
                                </span>
                                <span className='text'>Workspace</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className='icon'>
                                    <img src='/icons/landings.svg' alt='Landings icon' />
                                </span>
                                <span className='text'>Landings</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='group'>
                    <span className='title'>CRM</span>
                    <ul>
                        <li>
                            <a href='#'>
                                <span className='icon'>
                                    <img src='/icons/automation.svg' alt='Automation icon' />
                                </span>
                                <span className='text'>Automation</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className='icon'>
                                    <img src='/icons/messenger.svg' alt='Messenger icon' />
                                </span>
                                <span className='text'>Messenger</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className='icon'>
                                    <img src='/icons/customers.svg' alt='Customers icon' />
                                </span>
                                <span className='text'>Customers</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='group'>
                    <span className='title'>Management</span>
                    <ul>
                        <li>
                            <a href='#'>
                                <span className='icon'>
                                    <img src='/icons/teams.svg' alt='Teams icon' />
                                </span>
                                <span className='text'>Teams</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className='icon'>
                                    <img src='/icons/settings.png' alt='Settings icon' />
                                </span>
                                <span className='text'>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className='icon'>
                                    <img src='/icons/help.svg' alt='Help icon' />
                                </span>
                                <span className='text'>Help</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='card' ref={cardRef}>
                <div className='heading'>
                    <h4>Get a bonus!</h4>
                    <button className='btn-close' onClick={handleCardClose}>
                        <img className='icon' src='/icons/x-mark.svg' alt='Close icon' />
                    </button>
                </div>
                <div className='content'>
                    Activate the promo code in our Telegram bot and receive traffic on the balance
                </div>
                <div className='actions'>
                    <button className='btn-primary'>Get a bonus</button>
                </div>
            </div>
        </aside>
    )
}
