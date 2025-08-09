export default function ParentHome(){
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Veli Ana Sayfa</h1>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="p-4 border rounded">Not Ortalaması: 84</div>
        <div className="p-4 border rounded">Okunmamış Mesaj: 1</div>
        <div className="p-4 border rounded">Duyuru: 3</div>
      </div>
      <ul className="list-disc ml-6">
        <li>Son mesaj: "Aktivite günü yarın"</li>
        <li>Duyuru: "Online ders linki güncellendi"</li>
      </ul>
      <button className="bg-brand text-white px-3 py-2 rounded">Detaylar</button>
    </div>
  );
}