export default function AdminSettings(){
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Uygulama Ayarları</h1>
      <form className="space-y-3 max-w-lg">
        <div>
          <label className="block text-sm">Uygulama Adı</label>
          <input defaultValue="EduPulse" className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
          <label className="block text-sm">Tema Varsayılan</label>
          <select defaultValue="light" className="border rounded px-2 py-1">
            <option value="light">Açık</option>
            <option value="dark">Koyu</option>
          </select>
        </div>
        <button className="bg-brand text-white px-3 py-2 rounded">Kaydet</button>
      </form>
    </div>
  );
}