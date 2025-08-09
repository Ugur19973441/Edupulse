import { useState } from 'react'

type FileItem = { id: number; name: string; type: 'pdf'|'doc'; url: string }

export default function Files() {
  const [items, setItems] = useState<FileItem[]>([
    { id: 1, name: 'Ders Notları.pdf', type: 'pdf', url: 'https://example.com/sample.pdf' },
    { id: 2, name: 'Veli Bilgilendirme.docx', type: 'doc', url: 'https://example.com/sample.docx' },
  ])

  const addMock = () => {
    const id = Math.max(0, ...items.map(i=>i.id)) + 1
    setItems(prev => [...prev, { id, name: `Yeni Dosya ${id}.pdf`, type: 'pdf', url: 'https://example.com/sample.pdf' }])
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dosya Paylaşımı</h1>
      <div className="card p-4">
        <button className="btn" onClick={addMock}>PDF/Word Yükle (Mock)</button>
      </div>
      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Ad</th>
              <th className="p-2">Tür</th>
              <th className="p-2">Bağlantı</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{i.name}</td>
                <td className="p-2">{i.type}</td>
                <td className="p-2"><a className="text-primary-600 underline" href={i.url} target="_blank">Önizle</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}