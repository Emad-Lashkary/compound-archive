import { Circles } from "react-loader-spinner";

function SpinnerMini() {
  return (
    <div className="flex items-center justify-center">
      <Circles
        height="20"
        width="20"
        color="#3354ee"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default SpinnerMini;
