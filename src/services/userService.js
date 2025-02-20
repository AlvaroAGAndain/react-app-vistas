const API_URL = 'http://localhost:3000/dev';

const userService = {
  getUsers: async () => {
    try {

      const response = await fetch(`${API_URL}/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
   
        credentials: 'include',
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error('Error al obtener usuarios');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en getUsers:', error);
      throw error;
    }
  }
};

export default userService; 