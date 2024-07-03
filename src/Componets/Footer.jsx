import React from 'react'

export default function Footer() {
    return (
        <>
        <footer className="mt-32 font-thin">
            <div className="sm:px-8">
               <div className="mx-auto max-w-7xl lg:px-8">
                  <div className="border-t border-zinc-100 pt-10 pb-16 ">
                     <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                           <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                              <div className="flex gap-4 sm:gap-6 text-sm text-zinc-800 "><a className="transition hover:text-teal-500 " href="/">Home</a><a className="transition hover:text-teal-500" href="/about">About</a><a className="transition hover:text-teal-500" href="/projects">Projects</a><a className="transition hover:text-teal-500 " href="/certificates">Certification</a><a className="transition hover:text-teal-500" href="/contact">Contact</a></div>
                              <p className="text-sm text-zinc-400 ">
                                 © 2024 Bhavya Manishkumar Patel. All rights reserved.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
        </>
    )
}
