import { useState } from 'react';
interface Hw { id:number; title:string; due:string; desc:string }
export default function TeacherHomework(){
  const [list, setList] = useState<Hw[]>([]);
  const [hw, setHw] = useState<Hw>({ id:0, title:'Mat-1 Alıştırma', due:'2025-08-20', desc:'Sayfa 12-15' });
  function add(){ const id = list.length? Math.max(...list.map(h=>h.id))+1 : 1; setList([...list,{...hw,id}]); }
  function remove(id:number){ setList(list.filter(h=>h.id!==id)); }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Ödev Oluştur</h1>
      <div className="grid md:grid-cols-4 gap-2 items-end">
        <div><label className="block text-sm">Başlık</label><input value={hw.title} onChange={e=>setHw({...hw,title:e.target.value})} className="border rounded px-2 py-1 w-full"/></div>
        <div><label className="block text-sm">Teslim</label><input type="date" value={hw.due} onChange={e=>setHw({...hw,due:e.target.value})} className="border rounded px-2 py-1 w-full"/></div>
        <div className="md:col-span-2"><label className="block text-sm">Açıklama</label><input value={hw.desc} onChange={e=>setHw({...hw,desc:e.target.value})} className="border rounded px-2 py-1 w-full"/></div>
        <button onClick={add} className="bg-brand text-white px-3 py-2 rounded">Ekle</button>
      </div>
      <ul className="space-y-2">
        {list.map(h=> (
          <li key={h.id} className="border rounded p-3">
            <div className="font-medium">{h.title} <span className="text-xs text-slate-500">(Teslim: {h.due})</span></div>
            <p className="text-sm">{h.desc}</p>
            <button onClick={()=>remove(h.id)} className="text-red-600 text-sm mt-1">Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}