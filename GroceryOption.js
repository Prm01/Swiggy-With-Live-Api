import { imageGridCards } from "./utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption() {
  return (
    <div className="mt-20 w-[80%] mx-auto">
      <h1 className="text-3xl font-bold text-[#333] mb-6 text-left">
        Shop Groceries on Instamart
      </h1>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto scroll-smooth">
        <div className="flex flex-nowrap gap-6">
          {imageGridCards.map((foodData) => (
            <GroceryCard key={foodData.id} foodData={foodData} />
          ))}
        </div>
      </div>
    </div>
  );
}
