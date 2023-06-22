// List.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, deleteData } from './actions';

const styles = {
  table: {
    borderCollapse: 'collapse',
    width: '100%',
  },
};

const List = ({ sortedData, fetchData, deleteData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = (id) => {
    deleteData(id);
  };

  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullname}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sortedData: state.sortedData,
});

const mapDispatchToProps = {
  fetchData,
  deleteData,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
