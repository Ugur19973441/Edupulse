import { useState } from 'react'

type User = { id: number; name: string; email: string; role: 'admin'|'teacher'|'parent' }

export default function Users() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Admin Kullanıcı', email: 'admin@demo.com', role: 'admin' },
    { id: 2, name: 'Ayşe Öğretmen', email: 'ogretmen@demo.com', role: 'teacher' },
    { id: 3, name: 'Mehmet Veli', email: 'veli@demo.com', role: 'parent' },
  ])
  const [form, setForm] = useState<Partial<User>>({ role: 'teacher' })

  const addUser = (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.max(0, ...users.map(u=>u.id)) + 1
    const newUser = { id, name: form.name || 'Yeni Kullanıcı', email: form.email || `user${id}@demo.com`, role: form.role || 'teacher' }
    setUsers(prev => [...prev, newUser])
    setForm({ role: 'teacher' })
  }

  const remove = (id: number) => setUsers(prev => prev.filter(u => u.id !== id))

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Kullanıcı Yönetimi</h1>

      <form onSubmit={addUser} className="card p-4 grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
        <div>
          <label className="label">Ad Soyad</label>
          <input className="input" value={form.name||''} onChange={(e)=>setForm(f=>({...f, name:e.target.value}))} placeholder="Ad Soyad" />
        </div>
        <div>
          <label className="label">E-posta</label>
          <input className="input" value={form.email||''} onChange={(e)=>setForm(f=>({...f, email:e.target.value}))} placeholder="mail@ornek.com" />
        </div>
        <div>
          <label className="label">Rol</label>
          <select className="input" value={form.role} onChange={(e)=>setForm(f=>({...f, role: e.target.value as User['role']}))}>
            <option value="admin">Admin</option>
            <option value="teacher">Öğretmen</option>
            <option value="parent">Veli</option>
          </select>
        </div>
        <button className="btn">Ekle</button>
      </form>

      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">#</th>
              <th className="p-2">Ad Soyad</th>
              <th className="p-2">E-posta</th>
              <th className="p-2">Rol</th>
              <th className="p-2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{u.id}</td>
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2">{u.role}</td>
                <td className="p-2">
                  <button onClick={()=>remove(u.id)} className="text-sm px-3 py-1 rounded-md border border-red-300 text-red-700 hover:bg-red-50">Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}