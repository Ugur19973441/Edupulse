export default function ParentEvaluation(){
  const list = [
    { student:'Kendi öğrencim', mood:'positive' },
  ] as const;
  const label: any = { positive:'Pozitif', negative:'Negatif', neutral:'Nötr' };
  const color: any = { positive:'text-green-600', negative:'text-red-600', neutral:'text-gray-600' };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Genel Değerlendirme</h1>
      <ul className="space-y-2">
        {list.map((i,idx)=> (
          <li key={idx} className="border rounded p-3">
            <div className="font-medium">{i.student}</div>
            <div className={color[i.mood]}>Durum: {label[i.mood]}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}