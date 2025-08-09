export default function ParentAttendance(){
  const list = [
    { date:'2025-08-01', present:true },
    { date:'2025-08-02', present:false },
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Devamsızlık Bilgisi</h1>
      <table className="w-full text-sm border">
        <thead className="bg-slate-50"><tr><th className="p-2 text-left">Tarih</th><th className="p-2 text-left">Durum</th></tr></thead>
        <tbody>
          {list.map((r,i)=> (
            <tr key={i} className="border-t">
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.present? 'Var' : 'Yok'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}