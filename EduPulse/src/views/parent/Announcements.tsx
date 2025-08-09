export default function ParentAnnouncements(){
  const list = [
    { title:'Ders değişikliği', content:'Yarın ders saat 10:00' },
    { title:'Ödev duyurusu', content:'Mat-1 teslim tarihi güncellendi' },
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Duyurular</h1>
      <ul className="space-y-2">
        {list.map((a,i)=> (
          <li key={i} className="border rounded p-3">
            <h2 className="font-medium">{a.title}</h2>
            <p className="text-sm">{a.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}