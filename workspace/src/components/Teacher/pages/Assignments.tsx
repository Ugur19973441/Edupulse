import { useState } from 'react'

type Assignment = { id: number; title: string; description: string; due: string }

export default function Assignments() {
  const [items, setItems] = useState<Assignment[]>([
    { id: 1, title: 'Matematik Problem Seti', description: 'Sayfa 45-47 arası', due: '2025-08-12' },
    { id: 2, title: 'Fen Deneyi', description: 'Basit devre kurma', due: '2025-08-15' },
  ])
  const [form, setForm] = useState<Partial<Assignment>>({})

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.max(0, ...items.map(i=>i.id)) + 1
    setItems(prev => [...prev, { id, title: form.title || 'Yeni Ödev', description: form.description || '-', due: form.due || new Date().toISOString().slice(0,10) }])
    setForm({})
  }

  const remove = (id: number) => setItems(prev => prev.filter(i => i.id !== id))

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Ödev Oluştur</h1>

      <form onSubmit={add} className="card p-4 grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
        <div className="md:col-span-2">
          <label className="label">Başlık</label>
          <input className="input" value={form.title||''} onChange={e=>setForm(f=>({...f, title:e.target.value}))} />
        </div>
        <div>
          <label className="label">Teslim</label>
          <input className="input" type="date" value={form.due||''} onChange={e=>setForm(f=>({...f, due:e.target.value}))} />
        </div>
        <button className="btn">Ekle</button>
        <div className="md:col-span-4">
          <label className="label">Açıklama</label>
          <textarea className="input" value={form.description||''} onChange={e=>setForm(f=>({...f, description:e.target.value}))} rows={3} />
        </div>
      </form>

      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Başlık</th>
              <th className="p-2">Teslim</th>
              <th className="p-2">Açıklama</th>
              <th className="p-2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{i.title}</td>
                <td className="p-2 whitespace-nowrap">{i.due}</td>
                <td className="p-2">{i.description}</td>
                <td className="p-2"><button className="text-sm px-3 py-1 rounded-md border border-red-300 text-red-700 hover:bg-red-50" onClick={()=>remove(i.id)}>Sil</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}