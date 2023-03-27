function getEmployee(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      res.json()
    );
  }
  
  function getSalary(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json()
    );
  }
  
  module.exports = {
    getEmployee,
    getSalary,
  };
  