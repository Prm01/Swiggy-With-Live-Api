export default function GroceryCard({ foodData }) {
  return (
    <div className="flex-shrink-0 w-40 flex flex-col items-center">
      <a href={foodData?.action?.link}>
        <img
          className="w-40 h-40 object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}
          alt={foodData?.action?.text || "Grocery Item"}
        />
      </a>
      <h2 className="text-sm font-medium mt-2 text-center">
        {foodData?.action?.text}
      </h2>
    </div>
  );
}