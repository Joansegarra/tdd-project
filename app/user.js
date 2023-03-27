async function getUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    return data;
  }
  
  module.exports = {
    getUser,
  };
  