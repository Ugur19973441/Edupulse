import { useState } from 'react'

type Grade = { id: number; student: string; exam: string; score: number }

export default function Grades() {
  const [items, setItems] = useState<Grade[]>([
    { id: 1, student: 'Ali Yılmaz', exam: 'Matematik 1', score: 78 },
    { id: 2, student: 'Ayşe Demir', exam: 'Türkçe 1', score: 92 },
  ])
  const [form, setForm] = useState<Partial<Grade>>({})

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.max(0, ...items.map(i=>i.id)) + 1
    setItems(prev => [...prev, { id, student: form.student || 'Yeni Öğrenci', exam: form.exam || 'Yeni Sınav', score: Number(form.score||0) }])
    setForm({})
  }

  const remove = (id: number) => setItems(prev => prev.filter(i => i.id !== id))

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Not Girişi</h1>

      <form onSubmit={add} className="card p-4 grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
        <div>
          <label className="label">Öğrenci</label>
          <input className="input" value={form.student||''} onChange={e=>setForm(f=>({...f, student:e.target.value}))} />
        </div>
        <div>
          <label className="label">Sınav</label>
          <input className="input" value={form.exam||''} onChange={e=>setForm(f=>({...f, exam:e.target.value}))} />
        </div>
        <div>
          <label className="label">Puan</label>
          <input className="input" type="number" value={form.score as any || ''} onChange={e=>setForm(f=>({...f, score:e.target.value as any}))} />
        </div>
        <button className="btn">Ekle</button>
      </form>

      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Öğrenci</th>
              <th className="p-2">Sınav</th>
              <th className="p-2">Puan</th>
              <th className="p-2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{i.student}</td>
                <td className="p-2">{i.exam}</td>
                <td className="p-2">{i.score}</td>
                <td className="p-2"><button className="text-sm px-3 py-1 rounded-md border border-red-300 text-red-700 hover:bg-red-50" onClick={()=>remove(i.id)}>Sil</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}