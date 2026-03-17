import { useEffect, useMemo, useRef, useState } from 'react'

const ChatPage = () => {
    const [draft, setDraft] = useState('')
    const [messages, setMessages] = useState(() => [
        {
            id: 'm1',
            direction: 'in',
            text: 'Hey!\nWelcome to the chat.',
            time: '12:01'
        },
        {
            id: 'm2',
            direction: 'out',
            text: 'Hi! Can you make this look like WhatsApp?',
            time: '12:02'
        },
        {
            id: 'm3',
            direction: 'in',
            text: 'Incoming messages on the left, outgoing on the right.',
            time: '12:03'
        }
    ])

    const header = useMemo(
        () => ({
            name: 'Chat Room',
            status: 'online'
        }),
        []
    )

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages.length])

    const onSend = (e) => {
        e.preventDefault()
        const text = draft.trim()
        if (!text) return

        const now = new Date()
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })


        setDraft('')
    }

    return (
        <div className="h-screen content-center w-full bg-[#efeae2] text-slate-900">
            <div className="mx-auto flex h-full max-w-3xl flex-col shadow-sm md:mb-6 md:h-[calc(100vh-3rem)] md:rounded-2xl md:border md:border-black/10 md:bg-[#efeae2]">
                <header className="flex h-14 shrink-0 items-center gap-3 border-b border-black/10 bg-[#f0f2f5] px-4">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-300 text-sm font-semibold">
                        {header.name.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">{header.name}</div>
                        <div className="text-xs text-black/50">{header.status}</div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto px-4 py-3">
                    <div className="space-y-2">
                        {messages.map((m) => {
                            const isOutgoing = m.direction === 'out'
                            return (
                                <div
                                    key={m.id}
                                    className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={[
                                            'max-w-[78%] rounded-2xl px-3 py-2 shadow-sm',
                                            'whitespace-pre-wrap break-words text-sm leading-5',
                                            isOutgoing ? 'bg-[#d9fdd3]' : 'bg-white'
                                        ].join(' ')}
                                    >
                                        <div>{m.text}</div>
                                        <div
                                            className={[
                                                'mt-1 text-[11px] leading-none',
                                                isOutgoing ? 'text-right text-black/45' : 'text-left text-black/40'
                                            ].join(' ')}
                                        >
                                            {m.time}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div ref={endRef} />
                    </div>
                </main>

                <form
                    onSubmit={onSend}
                    className="flex shrink-0 items-center gap-2 border-t border-black/10 bg-[#f0f2f5] p-3">
                    <textarea
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        placeholder="Type a message"
                        rows={1}
                        className="flex-1 resize-none rounded-2xl bg-white px-4 py-2 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-emerald-300"/>
                    <button
                        type="submit"
                        className="grid items-center rounded-xl cursor-pointer px-2 bg-emerald-600 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 active:bg-emerald-800"
                        aria-label="Send message">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChatPage
