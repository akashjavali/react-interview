function App() {
  return (
    <div className='max-w-xl my-20 mx-auto'>
      <h1 className='text-center font-bold text-2xl'>User List</h1>

      <input
        placeholder='Search by name...'
        className='mt-4 mb-4 p-2 w-full border rounded border-black'
      />
      {/* Table */}
      {
        <table className='w-full ' width='100%'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      }
    </div>
  );
}

export default App;
