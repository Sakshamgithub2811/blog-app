import Random from "./components/Random";
import Tag from "./components/Tag";
function App() {
  return (
    <div className="w-full h-screen flex flex-col background  items-center">
        <h1 className="bg-white rounded-lg  text-center  mt-[40px]  px-10 py-2 text-3xl font-bold w-11/12">Random Gif's</h1>
        <div className="flex flex-col w-full items-center mt-[20px] ">
          <Random/>
          <Tag/>

        </div>
    </div>
  );
}

export default App;
