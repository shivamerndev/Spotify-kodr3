import { Link } from 'react-router-dom'
import { useCallback, useMemo, useRef, useState } from 'react'
import useSong from '../hooks/useSong'

const Home = () => {

    const { songs } = useSong()

    const audioRef = useRef(null)
    const [currentSong, setCurrentSong] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const formatTime = useCallback((seconds) => {
        if (!Number.isFinite(seconds) || seconds <= 0) return '0:00'
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = Math.floor(seconds % 60)
        return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`
    }, [])

    const togglePlay = useCallback(async () => {
        const audio = audioRef.current
        if (!audio) return

        if (audio.paused) {
            try {
                await audio.play()
                setIsPlaying(true)
            } catch (err) {
                console.log(err)
            }
        } else {
            audio.pause()
            setIsPlaying(false)
        }
    }, [])

    const playAudio = useCallback(async (song) => {
        const audio = audioRef.current
        if (!audio || !song?.song) return

        if (currentSong?._id === song._id) {
            await togglePlay()
            return
        }

        setCurrentSong(song)
        setCurrentTime(0)
        setDuration(0)

        audio.pause()
        audio.currentTime = 0
        audio.src = song.song

        try {
            await audio.play()
            setIsPlaying(true)
        } catch (err) {
            console.log(err)
            setIsPlaying(false)
        }
    }, [currentSong?._id, togglePlay])

    const canShowPlayer = useMemo(() => Boolean(currentSong?.song), [currentSong?.song])

    return (songs &&
        <div className={`min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10 ${canShowPlayer ? 'pb-28' : ''}`}>
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
                    {songs.map(s => <div onClick={() => playAudio(s)} key={s._id} className="group cursor-pointer rounded-2xl bg-white/5 p-4 shadow-2xl ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
                        <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                            <img
                                src={s.poster}
                                alt="thumbnail"
                                className="aspect-square w-full object-cover transition group-hover:scale-[1.02]"
                            />
                        </div>
                        <div className="mt-4 space-y-1">
                            <h2 className="text-base font-semibold text-white">{s.title || 'Untitled'}</h2>
                            <p className="text-sm text-slate-300">Artist: {s.artist || 'Unknown'}</p>
                        </div>
                    </div>)}
                </div>
            </div>

            <audio ref={audioRef}
                preload="metadata"
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
                onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime || 0)}
                onEnded={() => setIsPlaying(false)} />

            {canShowPlayer && (
                <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/70 backdrop-blur">
                    <div className="mx-auto flex w-full max-w-5xl items-center gap-4 px-4 py-4">
                        <div className="flex min-w-0 items-center gap-3">
                            <div className="h-12 w-12 overflow-hidden rounded-xl ring-1 ring-white/10">
                                <img src={currentSong.poster} alt="poster" className="h-full w-full object-cover" />
                            </div>
                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-white">{currentSong.title || 'Untitled'}</p>
                                <p className="truncate text-xs text-slate-300">{currentSong.artist || 'Unknown'}</p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={togglePlay}
                            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
                            aria-label={isPlaying ? 'Pause' : 'Play'}>
                            {isPlaying ? (
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                                    <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                                    <path d="M8 5v14l11-7L8 5z" />
                                </svg>
                            )}
                        </button>

                        <div className="flex min-w-0 flex-1 items-center gap-3">
                            <span className="w-10 text-right text-xs text-slate-300">{formatTime(currentTime)}</span>
                            <input
                                type="range"
                                min={0}
                                max={Math.max(0, duration)}
                                step="0.01"
                                value={Math.min(currentTime, duration || 0)}
                                onChange={(e) => {
                                    const audio = audioRef.current
                                    if (!audio) return
                                    const nextTime = Number(e.target.value)
                                    audio.currentTime = nextTime
                                    setCurrentTime(nextTime)
                                }}
                                className="h-2 w-full cursor-pointer accent-indigo-500"
                                aria-label="Seek" />
                            <span className="w-10 text-xs text-slate-300">{formatTime(duration)}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home
