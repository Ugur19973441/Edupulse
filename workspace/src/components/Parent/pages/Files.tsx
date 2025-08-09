export default function Files() {
  const items = [
    { name: 'Ders Notları.pdf', url: 'https://example.com/sample.pdf' },
    { name: 'Veli Bilgilendirme.docx', url: 'https://example.com/sample.docx' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dosyalar</h1>
      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Ad</th>
              <th className="p-2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i, idx) => (
              <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{i.name}</td>
                <td className="p-2 space-x-2">
                  <a className="text-primary-600 underline" href={i.url} target="_blank">Önizle</a>
                  <a className="text-primary-600 underline" href={i.url} download>İndir</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}