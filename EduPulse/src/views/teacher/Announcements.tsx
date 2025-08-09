import { useState } from 'react';
interface Ann { id:number; title:string; content:string }
export default function TeacherAnnouncements(){
  const [list, setList] = useState<Ann[]>([]);
  const [title, setTitle] = useState('Ders değişikliği');
  const [content, setContent] = useState('Yarın ders saat 10:00');
  function add(){ const id = list.length? Math.max(...list.map(a=>a.id))+1 : 1; setList([...list,{id,title,content}]); }
  function remove(id:number){ setList(list.filter(a=>a.id!==id)); }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Duyurular</h1>
      <div className="grid md:grid-cols-3 gap-2 items-end">
        <div><label className="block text-sm">Başlık</label><input value={title} onChange={e=>setTitle(e.target.value)} className="border rounded px-2 py-1 w-full"/></div>
        <div className="md:col-span-2"><label className="block text-sm">İçerik</label><input value={content} onChange={e=>setContent(e.target.value)} className="border rounded px-2 py-1 w-full"/></div>
        <button onClick={add} className="bg-brand text-white px-3 py-2 rounded">Ekle</button>
      </div>
      <ul className="space-y-2">
        {list.map(a=> (
          <li key={a.id} className="border rounded p-3">
            <h2 className="font-medium">{a.title}</h2>
            <p className="text-sm">{a.content}</p>
            <button onClick={()=>remove(a.id)} className="text-red-600 text-sm mt-1">Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}