import React from 'react'
import { Link } from 'react-router-dom'
import handleForm from '../utils/form.utils.js'
import useSong from '../hooks/useSong.js'

const Upload = () => {

    const { handleUploadSong } = useSong();

    return (
        <div className="h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-10">
            <div className="mx-auto flex w-full max-w-lg flex-col justify-center">
                <div className="rounded-2xl bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur sm:p-8">
                    <header className="mb-6">
                        <h1 className="text-2xl font-semibold tracking-tight text-white">Upload a song</h1>
                        <p className="mt-1 text-sm text-slate-300">Add a title and choose an audio file.</p>
                    </header>

                    <form onSubmit={(e)=>handleForm(e,handleUploadSong)} className="space-y-4">
                        <div className="space-y-1.5">
                            <label htmlFor="title" className="text-sm font-medium text-slate-200">
                                Song title
                            </label>
                            <input
                                id="title"
                                type="text"
                                name="artist"
                                placeholder="Enter song title"
                                className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-indigo-400/60 focus:ring-4 focus:ring-indigo-500/20"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="file" className="text-sm font-medium text-slate-200">
                                Audio file
                            </label>
                            <input
                                id="file"
                                type="file"
                                name="song"
                                accept="audio/*"
                                className="block w-full rounded-xl border border-white/10 bg-white/5 text-sm text-slate-200 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
                            />
                            <p className="text-xs text-slate-400">Supported: common audio formats (mp3, wav, etc.).</p>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-xl bg-indigo-500 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 active:translate-y-px"
                        >
                            Upload
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-300">
                        <Link to="/" className="font-medium text-indigo-300 hover:text-indigo-200">
                            Back to Home
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Upload
