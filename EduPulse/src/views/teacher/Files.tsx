import { useState } from 'react';
interface FileRow { id:number; student:string; name:string; url:string }
export default function TeacherFiles(){
  const [list, setList] = useState<FileRow[]>([]);
  const [student, setStudent] = useState('Ali Yılmaz');
  const [name, setName] = useState('Ders Notu.pdf');
  const [url, setUrl] = useState('https://example.com/sample.pdf');
  function add(){ const id = list.length? Math.max(...list.map(f=>f.id))+1 : 1; setList([...list,{id,student,name,url}]); }
  function remove(id:number){ setList(list.filter(f=>f.id!==id)); }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Dosya Paylaşımı</h1>
      <div className="grid md:grid-cols-4 gap-2 items-end">
        <div><label className="block text-sm">Öğrenci</label><input value={student} onChange={e=>setStudent(e.target.value)} className="border rounded px-2 py-1 w-full"/></div>
        <div><label className="block text-sm">Dosya Adı</label><input value={name} onChange={e=>setName(e.target.value)} className="border rounded px-2 py-1 w-full"/></div>
        <div><label className="block text-sm">URL</label><input value={url} onChange={e=>setUrl(e.target.value)} className="border rounded px-2 py-1 w-full"/></div>
        <button onClick={add} className="bg-brand text-white px-3 py-2 rounded">Ekle</button>
      </div>
      <table className="w-full text-sm border">
        <thead className="bg-slate-50"><tr><th className="p-2 text-left">Öğrenci</th><th className="p-2 text-left">Dosya</th><th className="p-2 text-left">İndir</th><th className="p-2">İşlem</th></tr></thead>
        <tbody>
          {list.map(f=> (
            <tr key={f.id} className="border-t">
              <td className="p-2">{f.student}</td>
              <td className="p-2">{f.name}</td>
              <td className="p-2"><a className="text-brand" href={f.url} target="_blank">Aç</a></td>
              <td className="p-2 text-center"><button onClick={()=>remove(f.id)} className="text-red-600">Sil</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}