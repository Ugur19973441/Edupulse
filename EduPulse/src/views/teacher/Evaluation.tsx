import { useState } from 'react';

type Mood = 'positive'|'negative'|'neutral';
interface Item{ id:number; student:string; mood:Mood }

export default function TeacherEvaluation(){
  const [list, setList] = useState<Item[]>([{ id:1, student:'Ali Yılmaz', mood:'positive' }]);
  function setMood(id:number, mood:Mood){ setList(list.map(i=> i.id===id ? { ...i, mood } : i)); }
  const colors: Record<Mood,string> = { positive:'bg-green-100 text-green-700', negative:'bg-red-100 text-red-700', neutral:'bg-gray-100 text-gray-700' };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Genel Değerlendirme</h1>
      <table className="w-full text-sm border">
        <thead className="bg-slate-50"><tr><th className="p-2 text-left">Öğrenci</th><th className="p-2 text-left">Durum</th></tr></thead>
        <tbody>
          {list.map(i=> (
            <tr key={i.id} className="border-t">
              <td className="p-2">{i.student}</td>
              <td className="p-2">
                <div className="flex gap-2">
                  <button onClick={()=>setMood(i.id,'positive')} className={`px-2 py-1 rounded ${colors.positive}`}>Pozitif</button>
                  <button onClick={()=>setMood(i.id,'negative')} className={`px-2 py-1 rounded ${colors.negative}`}>Negatif</button>
                  <button onClick={()=>setMood(i.id,'neutral')} className={`px-2 py-1 rounded ${colors.neutral}`}>Nötr</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}