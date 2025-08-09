import { useState } from 'react'

const ALL_PERMS = ['kullanici.okuma', 'kullanici.yazma', 'rapor.goruntuleme', 'duyuru.yonetim'] as const

type RolePerm = { role: string; permissions: string[] }

export default function Roles() {
  const [items, setItems] = useState<RolePerm[]>([
    { role: 'admin', permissions: [...ALL_PERMS] as string[] },
    { role: 'teacher', permissions: ['rapor.goruntuleme', 'duyuru.yonetim'] },
    { role: 'parent', permissions: ['rapor.goruntuleme'] },
  ])

  const toggle = (role: string, perm: string) => {
    setItems(prev => prev.map(r => r.role === role ? {
      ...r,
      permissions: r.permissions.includes(perm)
        ? r.permissions.filter(p => p !== perm)
        : [...r.permissions, perm]
    } : r))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Rol ve Yetkiler</h1>
      <div className="card p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Rol</th>
              {ALL_PERMS.map(p => <th key={p} className="p-2 whitespace-nowrap">{p}</th>)}
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.role} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2 font-medium">{i.role}</td>
                {ALL_PERMS.map(p => (
                  <td key={p} className="p-2">
                    <input type="checkbox" checked={i.permissions.includes(p)} onChange={() => toggle(i.role, p)} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button className="btn">Kaydet</button>
      </div>
    </div>
  )
}