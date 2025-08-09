import { useState } from 'react'

type EvalItem = { id: number; student: string; status: 'Pozitif'|'Negatif'|'Nötr'; note: string }

export default function Evaluation() {
  const [items, setItems] = useState<EvalItem[]>([
    { id: 1, student: 'Ali Yılmaz', status: 'Pozitif', note: 'Derste aktif' },
  ])
  const [form, setForm] = useState<Partial<EvalItem>>({ status: 'Pozitif' })

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.max(0, ...items.map(i=>i.id)) + 1
    setItems(prev => [...prev, { id, student: form.student || 'Yeni Öğrenci', status: (form.status as any) || 'Pozitif', note: form.note || '' }])
    setForm({ status: 'Pozitif' })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Genel Değerlendirme</h1>
      <form onSubmit={add} className="card p-4 grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
        <div>
          <label className="label">Öğrenci</label>
          <input className="input" value={form.student||''} onChange={e=>setForm(f=>({...f, student:e.target.value}))} />
        </div>
        <div>
          <label className="label">Durum</label>
          <select className="input" value={form.status} onChange={e=>setForm(f=>({...f, status: e.target.value as any}))}>
            <option>Pozitif</option>
            <option>Negatif</option>
            <option>Nötr</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="label">Not</label>
          <input className="input" value={form.note||''} onChange={e=>setForm(f=>({...f, note:e.target.value}))} />
        </div>
        <button className="btn">Ekle</button>
      </form>

      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Öğrenci</th>
              <th className="p-2">Durum</th>
              <th className="p-2">Not</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{i.student}</td>
                <td className="p-2">{i.status}</td>
                <td className="p-2">{i.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}