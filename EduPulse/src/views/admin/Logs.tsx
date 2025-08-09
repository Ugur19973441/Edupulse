import { useMemo, useState } from 'react';

const data = [
  { id: 1, actor: 'Admin', action: 'Kullanıcı oluşturdu', ts: '2025-08-01 10:12' },
  { id: 2, actor: 'Öğretmen', action: 'Duyuru yayınladı', ts: '2025-08-01 11:22' },
  { id: 3, actor: 'Veli', action: 'Mesaj gönderdi', ts: '2025-08-01 12:45' },
];

export default function AdminLogs(){
  const [q, setQ] = useState('');
  const filtered = useMemo(()=> data.filter(d => d.actor.toLowerCase().includes(q.toLowerCase()) || d.action.toLowerCase().includes(q.toLowerCase())), [q]);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">İşlem Kayıtları</h1>
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Ara..." className="border rounded px-2 py-1" />
      <table className="w-full text-sm border">
        <thead className="bg-slate-50">
          <tr><th className="p-2 text-left">Zaman</th><th className="p-2 text-left">Kişi</th><th className="p-2 text-left">İşlem</th></tr>
        </thead>
        <tbody>
          {filtered.map(d => (
            <tr key={d.id} className="border-t">
              <td className="p-2">{d.ts}</td>
              <td className="p-2">{d.actor}</td>
              <td className="p-2">{d.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}