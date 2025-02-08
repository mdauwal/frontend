import { Bookmark } from 'lucide-react';

const BookmarkPage = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Your Bookmarked Items</h1>
      <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg">
        <Bookmark className="w-16 h-16 text-gray-500" />
        <p className="ml-4 text-lg">You have no bookmarked items yet.</p>
      </div>
    </div>
  );
};

export default BookmarkPage;


