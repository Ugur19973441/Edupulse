export default function ParentReports(){
  function exportPdf(){ window.print(); }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Raporlar</h1>
      <ul className="list-disc ml-6">
        <li>Öğrenci başarı raporu</li>
      </ul>
      <button onClick={exportPdf} className="bg-brand text-white px-3 py-2 rounded">PDF İndir</button>
    </div>
  );
}