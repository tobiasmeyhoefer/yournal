const NeuerEintrag = () => {
  return (
    <div className="flex w-full h-full justify-center items-center flex-col gap-12">
      <textarea className="w-1/3 h-60 p-5 border border-gray-400 rounded-lg outline-none" placeholder="schreibe hier deine Gedanken auf"/>
      <button className="bg-gray-900 text-gray-50 p-3 rounded-lg hover:bg-gray-800">speichern</button>
    </div>
  );
}
 
export default NeuerEintrag;