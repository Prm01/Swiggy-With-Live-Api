
import { Link } from "react-router-dom";
export default function RestCard({ restInfo }) {
  const { name, avgRating, sla, cloudinaryImageId } = restInfo?.info;

  return (
    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="w-60 rounded-xl overflow-hidden shadow-md  hover:scale-105 transition-transform duration-200 mx-w-[280px]">
      <img
        className="w-full h-36 object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="p-3">
        <div className="font-bold text-sm truncate">{name}</div>

        <div className="flex items-center gap-3 mt-2">
          {/* Rating with Star SVG */}
          <div className="flex items-center gap-1 text-green-600 font-medium text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-4 h-4"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.92c.969 0 1.371 1.24.588 1.81l-3.978 2.89 1.517 4.674c.3.921-.755 1.688-1.54 1.118l-3.977-2.89-3.978 2.89c-.784.57-1.838-.197-1.539-1.118l1.517-4.674-3.978-2.89c-.783-.57-.38-1.81.588-1.81h4.92l1.518-4.674z" />
            </svg>
            <span>{avgRating || "N/A"}</span>
          </div>

          {/* ETA String */}
          <span className="text-gray-600 text-sm font-semibold">
            {sla?.slaString}
          </span>
        </div>
        <div className="text-gray-500 text-lg">
            {restInfo.info.cuisines.join(" ")}
        </div>
      </div>
    </div>
      </Link>
  );
}
