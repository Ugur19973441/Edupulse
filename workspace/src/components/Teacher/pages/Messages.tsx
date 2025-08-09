import { useEffect, useRef, useState } from 'react'

type Msg = { id: number; from: 'you'|'them'; text: string; time: string }

export default function Messages() {
  const [threads] = useState(['Veli: Mehmet', 'Veli: Ayşe', 'Veli: Can'])
  const [active, setActive] = useState(0)
  const [messages, setMessages] = useState<Msg[]>([
    { id: 1, from: 'them', text: 'Merhaba hocam', time: '09:00' },
    { id: 2, from: 'you', text: 'Merhaba, buyurun', time: '09:01' },
  ])
  const [text, setText] = useState('')
  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    const id = Math.max(0, ...messages.map(m=>m.id)) + 1
    const time = new Date().toTimeString().slice(0,5)
    setMessages(prev => [...prev, { id, from: 'you', text, time }])
    setText('')
    // mock incoming reply
    setTimeout(() => {
      const id2 = id + 1
      setMessages(prev => [...prev, { id: id2, from: 'them', text: 'Teşekkürler!', time }])
    }, 800)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Mesajlar</h1>
      <div className="card p-0 grid grid-cols-1 md:grid-cols-3 h-[60vh]">
        <aside className="border-r border-gray-200 dark:border-gray-700 p-2">
          <ul className="space-y-1">
            {threads.map((t, i) => (
              <li key={t}>
                <button onClick={()=>setActive(i)} className={`w-full text-left px-2 py-1 rounded ${active===i ? 'bg-primary-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>{t}</button>
              </li>
            ))}
          </ul>
        </aside>
        <section className="md:col-span-2 flex flex-col">
          <div className="flex-1 overflow-auto p-3 space-y-2">
            {messages.map(m => (
              <div key={m.id} className={`max-w-[75%] px-3 py-2 rounded ${m.from==='you' ? 'ml-auto bg-primary-600 text-white' : 'mr-auto bg-gray-100 dark:bg-gray-800'}`}>
                <div className="text-sm">{m.text}</div>
                <div className="text-[10px] opacity-70 text-right">{m.time}</div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={send} className="border-t border-gray-200 dark:border-gray-700 p-2 flex gap-2">
            <input className="input flex-1" value={text} onChange={e=>setText(e.target.value)} placeholder="Mesaj yazın..." />
            <button className="btn">Gönder</button>
          </form>
        </section>
      </div>
    </div>
  )
}