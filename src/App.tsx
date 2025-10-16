function App() {
  return (
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <h2>Customer List</h2>

      <input
        placeholder='Search by name...'
        style={{ marginBottom: 16, padding: 8, width: '100%' }}
      />
      {/* Table */}
      {
        <table
          width='100%'
          cellPadding='8'
          style={{ borderCollapse: 'collapse' }}
        >
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
