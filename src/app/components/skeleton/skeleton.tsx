const ProductCardSkeleton = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden animate-pulse h-full w-52 space-x-4">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2 p-4">
          <div className="w-10 h-6 bg-gray-300 rounded-md"></div>
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center items-center h-48 bg-gray-300 rounded"></div>
      </div>
      <div className="p-4">
        <div className="h-5 w-3/4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
