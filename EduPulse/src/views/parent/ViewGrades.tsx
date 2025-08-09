type Mood = 'positive' | 'negative' | 'neutral';

export default function ParentGrades(){
  const list: Array<{ course: string; score: number; mood: Mood }> = [
    { course:'Matematik', score:85, mood:'positive' },
    { course:'Fen', score:70, mood:'neutral' },
  ];
  const color: Record<Mood, string> = { positive:'text-green-600', negative:'text-red-600', neutral:'text-gray-600' };
  const label: Record<Mood, string> = { positive:'Pozitif', negative:'Negatif', neutral:'Nötr' };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Notlarım</h1>
      <table className="w-full text-sm border">
        <thead className="bg-slate-50"><tr><th className="p-2 text-left">Ders</th><th className="p-2 text-left">Puan</th><th className="p-2 text-left">Değerlendirme</th></tr></thead>
        <tbody>
          {list.map((x,i)=> (
            <tr key={i} className="border-t">
              <td className="p-2">{x.course}</td>
              <td className="p-2">{x.score}</td>
              <td className={`p-2 ${color[x.mood]}`}>{label[x.mood]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}