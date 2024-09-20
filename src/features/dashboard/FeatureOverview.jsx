import { useNavigate } from "react-router-dom";

function FeatureOverview({ children, route, icon }) {
  const navigate = useNavigate();
  return (
    <div className="flex h-32 w-52 flex-col items-center justify-around rounded-xl bg-gradient-to-b from-lime-200 via-lime-300 to-blue-300 shadow-2xl shadow-blue-600 hover:scale-[102%] transition-all">
      <span className="border-b-[1px] border-blue-900 text-2xl text-blue-900 pb-1">
        {children}
      </span>
      <div className="flex gap-4 text-blue-900">
        <button
          onClick={() => navigate(`/${route}`)}
          className="flex rounded-full bg-gradient-to-tr from-lime-200 to-blue-100 px-5 py-2 transition-all hover:bg-lime-100"
        >
          Go to &gt;
        </button>
        {icon}
      </div>
    </div>
  );
}

export default FeatureOverview;
