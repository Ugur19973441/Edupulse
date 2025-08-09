import { useState } from 'react'

type Row = { id: number; date: string; student: string; present: boolean }

export default function Attendance() {
  const [items, setItems] = useState<Row[]>([
    { id: 1, date: '2025-08-01', student: 'Ali Yılmaz', present: true },
    { id: 2, date: '2025-08-01', student: 'Ayşe Demir', present: false },
  ])
  const [form, setForm] = useState<Partial<Row>>({ date: new Date().toISOString().slice(0,10), present: true })

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.max(0, ...items.map(i=>i.id)) + 1
    setItems(prev => [...prev, { id, date: form.date || new Date().toISOString().slice(0,10), student: form.student || 'Yeni Öğrenci', present: !!form.present }])
    setForm({ date: new Date().toISOString().slice(0,10), present: true })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Devamsızlık Takibi</h1>

      <form onSubmit={add} className="card p-4 grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
        <div>
          <label className="label">Tarih</label>
          <input className="input" type="date" value={form.date||''} onChange={e=>setForm(f=>({...f, date:e.target.value}))} />
        </div>
        <div className="md:col-span-2">
          <label className="label">Öğrenci</label>
          <input className="input" value={form.student||''} onChange={e=>setForm(f=>({...f, student:e.target.value}))} />
        </div>
        <div>
          <label className="label">Durum</label>
          <select className="input" value={String(form.present)} onChange={e=>setForm(f=>({...f, present: e.target.value === 'true'}))}>
            <option value="true">Var</option>
            <option value="false">Yok</option>
          </select>
        </div>
        <button className="btn">Ekle</button>
      </form>

      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Tarih</th>
              <th className="p-2">Öğrenci</th>
              <th className="p-2">Durum</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2 whitespace-nowrap">{i.date}</td>
                <td className="p-2">{i.student}</td>
                <td className="p-2">{i.present ? 'Var' : 'Yok'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}