import { useState } from 'react';
interface Row { id:number; student:string; date:string; present:boolean }
export default function TeacherAttendance(){
  const [list, setList] = useState<Row[]>([{ id:1, student:'Ali Yılmaz', date:'2025-08-01', present:true }]);
  function toggle(id:number){ setList(list.map(r=> r.id===id ? { ...r, present: !r.present } : r)); }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Devamsızlık Takibi</h1>
      <table className="w-full text-sm border">
        <thead className="bg-slate-50"><tr><th className="p-2 text-left">Tarih</th><th className="p-2 text-left">Öğrenci</th><th className="p-2 text-left">Durum</th></tr></thead>
        <tbody>
          {list.map(r=> (
            <tr key={r.id} className="border-t">
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.student}</td>
              <td className="p-2">
                <button onClick={()=>toggle(r.id)} className={`px-2 py-1 rounded ${r.present? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {r.present? 'Var' : 'Yok'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}