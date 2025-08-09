import { useState } from 'react';

type Mood = 'positive'|'negative'|'neutral';
interface Grade { id:number; student:string; course:string; score:number; mood:Mood }

export default function TeacherGrades(){
  const [list, setList] = useState<Grade[]>([]);
  const [g, setG] = useState<Grade>({ id:0, student:'Ali Yılmaz', course:'Matematik', score:85, mood:'positive' });
  function add(){ const id = list.length? Math.max(...list.map(x=>x.id))+1 : 1; setList([...list,{...g,id}]); }
  function remove(id:number){ setList(list.filter(x=>x.id!==id)); }

  const moodColor: Record<Mood,string> = { positive:'text-green-600', negative:'text-red-600', neutral:'text-gray-600' };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Not Girişi</h1>
      <div className="grid md:grid-cols-5 gap-2 items-end">
        <div><label className="block text-sm">Öğrenci</label><input value={g.student} onChange={e=>setG({...g,student:e.target.value})} className="border rounded px-2 py-1 w-full"/></div>
        <div><label className="block text-sm">Ders</label><input value={g.course} onChange={e=>setG({...g,course:e.target.value})} className="border rounded px-2 py-1 w-full"/></div>
        <div><label className="block text-sm">Puan</label><input type="number" value={g.score} onChange={e=>setG({...g,score:Number(e.target.value)})} className="border rounded px-2 py-1 w-full"/></div>
        <div>
          <label className="block text-sm">Genel Değerlendirme</label>
          <select value={g.mood} onChange={e=>setG({...g,mood:e.target.value as Mood})} className="border rounded px-2 py-1 w-full">
            <option value="positive">Pozitif</option>
            <option value="negative">Negatif</option>
            <option value="neutral">Nötr</option>
          </select>
        </div>
        <button onClick={add} className="bg-brand text-white px-3 py-2 rounded">Ekle</button>
      </div>
      <table className="w-full text-sm border">
        <thead className="bg-slate-50"><tr><th className="p-2 text-left">Öğrenci</th><th className="p-2 text-left">Ders</th><th className="p-2 text-left">Puan</th><th className="p-2 text-left">Durum</th><th className="p-2">İşlem</th></tr></thead>
        <tbody>
          {list.map(x=> (
            <tr key={x.id} className="border-t">
              <td className="p-2">{x.student}</td>
              <td className="p-2">{x.course}</td>
              <td className="p-2">{x.score}</td>
              <td className={`p-2 ${moodColor[x.mood]}`}>{x.mood==='positive'?'Pozitif':x.mood==='negative'?'Negatif':'Nötr'}</td>
              <td className="p-2 text-center"><button onClick={()=>remove(x.id)} className="text-red-600">Sil</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}