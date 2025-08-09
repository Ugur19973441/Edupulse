import { useEffect, useRef, useState } from 'react';
interface Msg { id:number; from:'Teacher'|'Parent'; text:string; ts:string }
export default function ParentMessages(){
  const [list, setList] = useState<Msg[]>([{ id:1, from:'Teacher', text:'Merhaba veli', ts:'10:00' }]);
  const [text, setText] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{ endRef.current?.scrollIntoView({ behavior:'smooth' }); }, [list]);
  function send(){ if(!text.trim()) return; const id = list.length? Math.max(...list.map(m=>m.id))+1 : 1; setList([...list,{ id, from:'Parent', text, ts: new Date().toLocaleTimeString() }]); setText(''); }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Mesajlar</h1>
      <div className="border rounded h-80 overflow-auto p-3 bg-slate-50">
        {list.map(m=> (
          <div key={m.id} className={`mb-2 flex ${m.from==='Parent'?'justify-end':'justify-start'}`}>
            <div className={`px-3 py-2 rounded max-w-xs ${m.from==='Parent'?'bg-brand text-white':'bg-white border'}`}>
              <div className="text-sm">{m.text}</div>
              <div className="text-[10px] opacity-70 text-right">{m.ts}</div>
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex gap-2">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Mesaj yazın..." className="border rounded px-2 py-2 flex-1" />
        <button onClick={send} className="bg-brand text-white px-3 py-2 rounded">Gönder</button>
      </div>
    </div>
  );
}