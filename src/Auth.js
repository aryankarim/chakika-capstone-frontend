import makeToast from './Toaster';
import axios from 'axios';
class Auth {
  constructor() {
    this.authenticated = false;
    this.email = '';
    this.name = '';
  }

  async login(email, password) {
    try {
      const url = 'https://blooming-citadel-16531.herokuapp.com/user/login';
      let res = await axios.post(url, {
        email,
        password,
      });
      return res;
    } catch (err) {
      if (err.response.data.message) {
        makeToast('error', err.response.data.message);
        this.authenticated = false;
        return err;
      }
    }
  }

  logout() {
    this.authenticated = false;
  }
  async isAuthenticated() {
    try {
      await axios
        .get('https://blooming-citadel-16531.herokuapp.com/authenticate', {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('Chakika_token'),
          },
        })
        .then((response) => {
          this.authenticated = true;
          console.log('in isAuthenticated');
        })
        .catch((error) => {
          console.log('in the err part', error);
          this.authenticated = false;
        });
      console.log('something');
      return this.authenticated;
    } catch (err) {
      console.log('new err');
      this.authenticated = false;
      return false;
    }
  }
}

export default new Auth();
