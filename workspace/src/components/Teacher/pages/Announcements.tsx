import { useState } from 'react'

type Ann = { id: number; title: string; body: string }

export default function Announcements() {
  const [items, setItems] = useState<Ann[]>([
    { id: 1, title: 'Veli Toplantısı', body: 'Cuma günü saat 17:00' },
  ])
  const [form, setForm] = useState<Partial<Ann>>({})

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.max(0, ...items.map(i=>i.id)) + 1
    setItems(prev => [...prev, { id, title: form.title || 'Yeni Duyuru', body: form.body || '-' }])
    setForm({})
  }

  const remove = (id: number) => setItems(prev => prev.filter(i => i.id !== id))

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Duyurular</h1>

      <form onSubmit={add} className="card p-4 grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
        <div className="md:col-span-3">
          <label className="label">Başlık</label>
          <input className="input" value={form.title||''} onChange={e=>setForm(f=>({...f, title:e.target.value}))} />
        </div>
        <button className="btn">Ekle</button>
        <div className="md:col-span-4">
          <label className="label">İçerik</label>
          <textarea className="input" rows={3} value={form.body||''} onChange={e=>setForm(f=>({...f, body:e.target.value}))} />
        </div>
      </form>

      <ul className="card p-4 space-y-3">
        {items.map(i => (
          <li key={i.id} className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
            <div className="font-semibold">{i.title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{i.body}</div>
            <div className="mt-2"><button className="text-sm px-3 py-1 rounded-md border border-red-300 text-red-700 hover:bg-red-50" onClick={()=>remove(i.id)}>Sil</button></div>
          </li>
        ))}
      </ul>
    </div>
  )
}