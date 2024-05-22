'use client'
import React, { useState } from 'react'
import Link from "next/link"
import Modal from 'react-modal'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const customStyles = {
        overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
           color: '#000000',
           minHeight: '50vh',
           minWidth: '600px',
           top: '50%',
           left: '50%',
           right: 'auto',
           bottom: 'auto',
           marginRight: '-50%',
           transform: 'translate(-50%, -50%)'
        }
    }

    return (
        // sticky top-0 z-50
        <header className="bg-cyan-700 w-full text-white py-4 px-4">
            <div className="w-full flex justify-between items-center">
                <div className="w-full flex justify-between items-center gap-6 sm:w-max">
                    <h1 className="text-2xl font-semibold"><Link href="/">СТОГИД</Link></h1>
                    <a href="#" className="flex justify-between items-center gap-1 p-1.5 border-solid border-2 border-sky-50 rounded-md" onClick={() => setIsOpen(true)}>
                        <svg className="h-6 w-6 text-sky-50"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <circle cx="12" cy="11" r="3" />  
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <span>Великий Новгород</span>
                    </a>
                    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                        <h1 className="text-2xl font-semibold text-center">Выбор города</h1>
                        {/* <button onClick={() => setIsOpen(false)}>Close Modal</button> */}
                    </Modal>
                </div>
                <Link href="/add" className="hidden flex justify-between items-center gap-1 p-1.5 border-solid border-2 border-sky-50 rounded-md sm:flex">
                    <svg className="h-6 w-6 text-sky-50" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    <span>Добавить место</span>
                </Link>
            </div>
        </header>
    );
}