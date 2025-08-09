export default function ParentSchedule(){
  const list = [
    { day:'Pazartesi', time:'09:00', course:'Matematik', link:'https://meet.google.com' },
    { day:'Salı', time:'10:00', course:'Fen', link:'https://zoom.us' },
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Ders Programı</h1>
      <table className="w-full text-sm border">
        <thead className="bg-slate-50"><tr><th className="p-2 text-left">Gün</th><th className="p-2 text-left">Saat</th><th className="p-2 text-left">Ders</th><th className="p-2 text-left">Link</th></tr></thead>
        <tbody>
          {list.map((l,i)=> (
            <tr key={i} className="border-t">
              <td className="p-2">{l.day}</td>
              <td className="p-2">{l.time}</td>
              <td className="p-2">{l.course}</td>
              <td className="p-2"><a href={l.link} target="_blank" className="text-brand">Bağlantı</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}