export default function TeacherProfile(){
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Profil Güncelleme</h1>
      <form className="max-w-lg space-y-3">
        <div><label className="block text-sm">Ad Soyad</label><input defaultValue="Öğretmen" className="border rounded px-2 py-1 w-full"/></div>
        <div><label className="block text-sm">E-posta</label><input defaultValue="ogretmen@demo.com" className="border rounded px-2 py-1 w-full"/></div>
        <div><label className="block text-sm">Şifre</label><input type="password" placeholder="Yeni şifre" className="border rounded px-2 py-1 w-full"/></div>
        <button className="bg-brand text-white px-3 py-2 rounded">Kaydet</button>
      </form>
    </div>
  );
}