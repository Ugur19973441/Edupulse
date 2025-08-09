import { useState } from 'react';

interface Lesson { id:number; day:string; time:string; course:string; link?:string }
const days = ['Pazartesi','Salı','Çarşamba','Perşembe','Cuma'];

export default function TeacherSchedule(){
  const [list, setList] = useState<Lesson[]>([]);
  const [form, setForm] = useState<Lesson>({ id:0, day:'Pazartesi', time:'09:00', course:'Matematik', link:'' });

  function add(){
    const id = list.length ? Math.max(...list.map(l=>l.id))+1 : 1;
    setList([...list, { ...form, id }]);
  }
  function remove(id:number){ setList(list.filter(l=>l.id!==id)); }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Ders Programı</h1>
      <div className="grid md:grid-cols-5 gap-2 items-end">
        <div>
          <label className="block text-sm">Gün</label>
          <select value={form.day} onChange={e=>setForm({...form, day:e.target.value})} className="border rounded px-2 py-1 w-full">
            {days.map(d=> <option key={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm">Saat</label>
          <input value={form.time} onChange={e=>setForm({...form, time:e.target.value})} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
          <label className="block text-sm">Ders</label>
          <input value={form.course} onChange={e=>setForm({...form, course:e.target.value})} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
          <label className="block text-sm">Online Link (Zoom/Meet)</label>
          <input value={form.link} onChange={e=>setForm({...form, link:e.target.value})} className="border rounded px-2 py-1 w-full" />
        </div>
        <button onClick={add} className="bg-brand text-white px-3 py-2 rounded">Ekle</button>
      </div>
      <table className="w-full text-sm border">
        <thead className="bg-slate-50">
          <tr><th className="p-2 text-left">Gün</th><th className="p-2 text-left">Saat</th><th className="p-2 text-left">Ders</th><th className="p-2 text-left">Link</th><th className="p-2">İşlem</th></tr>
        </thead>
        <tbody>
          {list.map(l=> (
            <tr key={l.id} className="border-t">
              <td className="p-2">{l.day}</td>
              <td className="p-2">{l.time}</td>
              <td className="p-2">{l.course}</td>
              <td className="p-2">{l.link ? <a className="text-brand" target="_blank" href={l.link}>Bağlantı</a> : '-'}</td>
              <td className="p-2 text-center"><button onClick={()=>remove(l.id)} className="text-red-600">Sil</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}