export default function Dashboard() {
  const stats = [
    { label: 'Sınıf Sayısı', value: 4 },
    { label: 'Öğrenci', value: 96 },
    { label: 'Bekleyen Ödev', value: 7 },
    { label: 'Bugün Ders', value: 3 },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Öğretmen Paneli</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="card p-4">
            <div className="text-sm text-gray-500">{s.label}</div>
            <div className="text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="card p-6">
        <h2 className="font-semibold mb-2">Başarı Trendleri</h2>
        <div className="text-sm text-gray-500">Grafik bileşeni için Recharts kuruludur; örnek verilerle entegre edilebilir.</div>
        <button className="btn mt-4">PDF Raporu İndir</button>
      </div>
    </div>
  )
}