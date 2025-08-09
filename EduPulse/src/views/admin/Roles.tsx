export default function AdminRoles(){
  const roles = [
    { role: 'Admin', permissions: ['CRUD Kullanıcı', 'Rol Yönetimi', 'Loglar', 'Ayarlar'] },
    { role: 'Teacher', permissions: ['Ödev CRUD', 'Not Girişi', 'Devamsızlık', 'Duyuru CRUD', 'Mesajlaşma'] },
    { role: 'Parent', permissions: ['Kendi öğrencisi verileri', 'Mesajlaşma', 'Rapor Görüntüleme'] },
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Rol ve Yetki Yönetimi</h1>
      <ul className="space-y-2">
        {roles.map(r => (
          <li key={r.role} className="border rounded p-3">
            <h2 className="font-medium">{r.role}</h2>
            <ul className="list-disc ml-6 text-sm mt-1">
              {r.permissions.map(p => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}