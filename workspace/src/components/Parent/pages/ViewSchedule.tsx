export default function ViewSchedule() {
  const days = ['Pazartesi','Salı','Çarşamba','Perşembe','Cuma']
  const hours = ['09:00','10:00','11:00','13:00']
  const map: Record<string, string> = {
    'Pazartesi-09:00': 'Matematik',
    'Salı-10:00': 'Türkçe',
    'Perşembe-13:00': 'Fen',
  }
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Özel Sayfa: Ders Programı</h1>
      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="p-2 text-left">Saat/Gün</th>
              {days.map(d => <th key={d} className="p-2 text-left">{d}</th>)}
            </tr>
          </thead>
          <tbody>
            {hours.map(h => (
              <tr key={h} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2 font-medium whitespace-nowrap">{h}</td>
                {days.map(d => (
                  <td key={d} className="p-2">{map[`${d}-${h}`] || '-'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}