function App() {
  return (
    <>
      <div className="m-12">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md focus:ring-2 ring-offset-2 ring-blue-300">
          Sign in Google
        </button>
        <button className="px-6 py-2 ml-4 bg-red-600 text-white rounded-md focus:ring-2 ring-offset-2 ring-red-300">
          Sign Out
        </button>

        <div className="mt-4 w-96 p-4 border rounded-md space-y-4">
          <img src="" alt="" />
          <p className="border-b border-blue-300 pb-2">Name: {}</p>
          <p className="border-b border-blue-300 pb-2">Email: {}</p>
        </div>
      </div>
    </>
  );
}

export default App;
