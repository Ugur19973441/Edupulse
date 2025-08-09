export default function Assignments() {
  const items = [
    { title: 'Matematik Problem Seti', due: '2025-08-12' },
    { title: 'Fen Deneyi', due: '2025-08-15' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Ödevlerim</h1>
      <ul className="card p-4 space-y-2">
        {items.map((i, idx) => (
          <li key={idx} className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-md p-3">
            <div>
              <div className="font-medium">{i.title}</div>
              <div className="text-sm text-gray-500">Teslim: {i.due}</div>
            </div>
            <button className="btn">Durum İşaretle</button>
          </li>
        ))}
      </ul>
    </div>
  )
}