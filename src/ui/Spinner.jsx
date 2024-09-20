import { Circles } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="flex h-96 items-center justify-center">
      <Circles
        height="180"
        width="180"
        color="#3354ee"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
