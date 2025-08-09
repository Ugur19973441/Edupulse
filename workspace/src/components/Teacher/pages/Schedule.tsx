import { useState } from 'react'

type Lesson = { id: number; day: string; time: string; course: string }

export default function Schedule() {
  const [items, setItems] = useState<Lesson[]>([
    { id: 1, day: 'Pazartesi', time: '09:00 - 09:45', course: 'Matematik' },
    { id: 2, day: 'Salı', time: '10:00 - 10:45', course: 'Fen Bilimleri' },
  ])
  const [form, setForm] = useState<Partial<Lesson>>({ day: 'Pazartesi' })

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.max(0, ...items.map(i=>i.id)) + 1
    setItems(prev => [...prev, { id, day: form.day || 'Pazartesi', time: form.time || '11:00 - 11:45', course: form.course || 'Türkçe' }])
    setForm({ day: 'Pazartesi' })
  }

  const remove = (id: number) => setItems(prev => prev.filter(i=>i.id!==id))

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Ders Programı</h1>

      <form onSubmit={add} className="card p-4 grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
        <div>
          <label className="label">Gün</label>
          <select className="input" value={form.day} onChange={e=>setForm(f=>({...f, day:e.target.value}))}>
            {['Pazartesi','Salı','Çarşamba','Perşembe','Cuma'].map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Saat</label>
          <input className="input" placeholder="09:00 - 09:45" value={form.time||''} onChange={e=>setForm(f=>({...f, time:e.target.value}))} />
        </div>
        <div>
          <label className="label">Ders</label>
          <input className="input" placeholder="Ders adı" value={form.course||''} onChange={e=>setForm(f=>({...f, course:e.target.value}))} />
        </div>
        <button className="btn">Ekle</button>
      </form>

      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Gün</th>
              <th className="p-2">Saat</th>
              <th className="p-2">Ders</th>
              <th className="p-2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{i.day}</td>
                <td className="p-2">{i.time}</td>
                <td className="p-2">{i.course}</td>
                <td className="p-2"><button className="text-sm px-3 py-1 rounded-md border border-red-300 text-red-700 hover:bg-red-50" onClick={()=>remove(i.id)}>Sil</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}