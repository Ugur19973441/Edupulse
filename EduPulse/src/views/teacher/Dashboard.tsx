export default function TeacherDashboard(){
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Öğretmen Ana Sayfa</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-4 border rounded">Toplam Öğrenci: 24</div>
        <div className="p-4 border rounded">Bugünkü Ders: 4</div>
        <div className="p-4 border rounded">Okunmamış Mesaj: 2</div>
      </div>
      <ul className="list-disc ml-6">
        <li>Son Duyuru: Ödev teslim tarihi güncellendi.</li>
        <li>Rapor: 8/A sınıfı başarı oranı %78</li>
      </ul>
      <button className="bg-brand text-white px-3 py-2 rounded">Yeni Duyuru</button>
    </div>
  );
}