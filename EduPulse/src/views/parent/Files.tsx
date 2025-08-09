export default function ParentFiles(){
  const files = [
    { name:'Ders Notu.pdf', url:'https://example.com/sample.pdf' },
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Dosyalar</h1>
      <ul className="space-y-2">
        {files.map((f,i)=> (
          <li key={i} className="border rounded p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{f.name}</div>
              <div className="text-xs text-slate-500">Önizleme ve indirme</div>
            </div>
            <div className="flex gap-2">
              <a href={f.url} target="_blank" className="px-3 py-2 rounded border">Önizle</a>
              <a href={f.url} download className="px-3 py-2 rounded bg-brand text-white">İndir</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}