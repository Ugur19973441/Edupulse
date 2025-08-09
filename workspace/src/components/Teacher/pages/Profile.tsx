import { useState } from 'react'

export default function Profile() {
  const [name, setName] = useState('Ayşe Öğretmen')
  const [password, setPassword] = useState('')

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Profil güncellendi (mock)')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Profil</h1>
      <form onSubmit={save} className="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label">Ad Soyad</label>
          <input className="input" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
          <label className="label">Şifre</label>
          <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Yeni şifre" />
        </div>
        <div className="md:col-span-2">
          <button className="btn">Kaydet</button>
        </div>
      </form>
    </div>
  )
}