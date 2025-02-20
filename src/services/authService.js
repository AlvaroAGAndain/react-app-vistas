const API_URL = 'http://localhost:3000/dev'; // Ajusta esto a tu URL de backend

const authService = {
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include', // Si necesitas enviar cookies
        mode: 'cors', // Asegúrate de que estás usando modo cors
        body: JSON.stringify({ email, password }),
      });

      console.log('RESPONSE', response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Credenciales inválidas');
      }

      const data = await response.json();
      
      // Guardamos el token en localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      return data;
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: () => {
    return localStorage.getItem('token');
  },
};

export default authService; 