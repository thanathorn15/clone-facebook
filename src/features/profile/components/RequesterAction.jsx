import useProfile from '../hooks/useProfile';

export default function RequesterAction() {
  const { confirmFriend, rejectFriend } = useProfile();
  return (
    <div className="flex gap-4">
      <button
        className="px-3 py-1.5 rounded-md bg-gray-200 hover:bg-gray-300 font-semibold"
        onClick={confirmFriend}
      >
        Confirm
      </button>
      <button
        className="px-3 py-1.5 rounded-md bg-gray-200 hover:bg-gray-300 font-semibold"
        onClick={rejectFriend}
      >
        Delete
      </button>
    </div>
  );
}