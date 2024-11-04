import { UserLogin } from "../interfaces/UserLogin";
import Auth from '../utils/auth';

const login = async (userInfo: UserLogin) => {
  // make a POST request to the login route
  try {
    const response = await fetch(
    '/auth/login', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify(userInfo),
    })

    const data = await response.json();

    if (!response.ok) {
      throw new Error('User information not retrieved, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error logging in: ', err);
    return Promise.reject('Could not fetch user info');
  }
}



export { login };
