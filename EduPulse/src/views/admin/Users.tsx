import { useState } from 'react';

interface UserRow { id: number; name: string; email: string; role: 'Admin'|'Teacher'|'Parent'; }
const initial: UserRow[] = [
  { id: 1, name: 'Admin', email: 'admin@demo.com', role: 'Admin' },
  { id: 2, name: 'Öğretmen', email: 'ogretmen@demo.com', role: 'Teacher' },
  { id: 3, name: 'Veli', email: 'veli@demo.com', role: 'Parent' },
];

export default function AdminUsers() {
  const [rows, setRows] = useState<UserRow[]>(initial);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'Admin'|'Teacher'|'Parent'>('Parent');

  function addUser() {
    const id = Math.max(...rows.map(r=>r.id)) + 1;
    setRows([...rows, { id, name, email, role }]);
    setName(''); setEmail(''); setRole('Parent');
  }
  function removeUser(id:number){ setRows(rows.filter(r=>r.id!==id)); }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Kullanıcı Yönetimi</h1>
      <div className="flex gap-2 items-end">
        <div>
          <label className="block text-sm">Ad Soyad</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="border rounded px-2 py-1" />
        </div>
        <div>
          <label className="block text-sm">E-posta</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} className="border rounded px-2 py-1" />
        </div>
        <div>
          <label className="block text-sm">Rol</label>
          <select value={role} onChange={e=>setRole(e.target.value as any)} className="border rounded px-2 py-1">
            <option>Admin</option>
            <option>Teacher</option>
            <option>Parent</option>
          </select>
        </div>
        <button onClick={addUser} className="bg-brand text-white px-3 py-2 rounded">Ekle</button>
      </div>
      <table className="w-full text-sm border">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Ad</th>
            <th className="p-2 text-left">E-posta</th>
            <th className="p-2 text-left">Rol</th>
            <th className="p-2">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r=> (
            <tr key={r.id} className="border-t">
              <td className="p-2">{r.id}</td>
              <td className="p-2">{r.name}</td>
              <td className="p-2">{r.email}</td>
              <td className="p-2">{r.role}</td>
              <td className="p-2 text-center"><button onClick={()=>removeUser(r.id)} className="text-red-600">Sil</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  