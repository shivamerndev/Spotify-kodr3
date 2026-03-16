import React from 'react'
import { Link } from 'react-router-dom'
import handleForm from '../utils/form.utils.js'
import useAuth from '../hooks/useAuth.js'

const Login = () => {

    const {handleLogin} = useAuth()

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10">
            <div className="mx-auto flex w-full max-w-md flex-col justify-center">
                <div className="rounded-2xl bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur sm:p-8">
                    <header className="mb-6">
                        <h1 className="text-2xl font-semibold tracking-tight text-white">Sign In your account</h1>
                        <p className="mt-1 text-sm text-slate-300">Login to continue.</p>
                    </header>

                    <form onSubmit={(e)=>handleForm(e,handleLogin)} className="space-y-4">
                        <div className="space-y-1.5">
                            <label htmlFor="username" className="text-sm font-medium text-slate-200">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                name='username'
                                placeholder="Enter your username"
                                autoComplete="username"
                                className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-indigo-400/60 focus:ring-4 focus:ring-indigo-500/20"
                            />
                        </div>



                        <div className="space-y-1.5">
                            <label htmlFor="password" className="text-sm font-medium text-slate-200">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name='password'
                                placeholder="Create a unique password"
                                autoComplete="new-password"
                                className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-indigo-400/60 focus:ring-4 focus:ring-indigo-500/20"
                            />
                            <p className="text-xs text-slate-400">Use at least 8 characters.</p>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-xl bg-indigo-500 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 active:translate-y-px">
                            Login In
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-300">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-medium text-indigo-300 hover:text-indigo-200">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login