import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10">
            <div className="mx-auto w-full max-w-5xl">
                <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-white">Home</h1>
                        <p className="mt-1 text-sm text-slate-300">Browse songs and manage uploads.</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Link to="/upload" className="inline-flex h-10 items-center justify-center rounded-xl bg-indigo-500 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30">
                            Upload song
                        </Link>

                        <Link to="/login" className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/20">
                            Login
                        </Link>
                    </div>
                </header>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group cursor-pointer rounded-2xl bg-white/5 p-4 shadow-2xl ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
                        <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                            <img
                                src="thumbnail"
                                alt="thumbnail"
                                className="aspect-square w-full object-cover transition group-hover:scale-[1.02]"
                            />
                        </div>
                        <div className="mt-4 space-y-1">
                            <h2 className="text-base font-semibold text-white">Title</h2>
                            <p className="text-sm text-slate-300">Artist: Yo Yo Honey Singh</p>
                            <p className="text-xs text-slate-400">Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
