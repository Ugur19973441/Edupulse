export default function TeacherReports(){
  function exportPdf(){ window.print(); }
  return (
    <div className="space-y-4 print:bg-white">
      <h1 className="text-2xl font-semibold">Raporlar</h1>
      <ul className="list-disc ml-6">
        <li>Başarı Trendleri: Son 3 ayda artış</li>
        <li>Not Ortalaması: 82</li>
      </ul>
      <button onClick={exportPdf} className="bg-brand text-white px-3 py-2 rounded">PDF İndir</button>
    </div>
  );
}