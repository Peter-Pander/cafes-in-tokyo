import "./CafeList.css";
import Cafe from "../Cafe/Cafe";

// rsc + Tab ===> Gives a React Component
const CafeList = ( {cafeDatas} ) => {


  return (
    // <div className="cafe-list">
    //   <Cafe cafeData={cafeDatas[0]} />
    //   <Cafe cafeData={cafeDatas[1]} />
    //   <Cafe cafeData={cafeDatas[2]} />
    // </div>
    <div className="cafe-list">
      { cafeDatas.map(cafeData => <Cafe key={cafeData.title} cafeData={cafeData} />) }
    </div>

  );
};

export default CafeList;
