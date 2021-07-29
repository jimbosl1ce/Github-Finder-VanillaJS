class GitHub {
  constructor() {
    this.client_id = '9975791f1e6c8e5c1a1c';
    this.client_secret = 'd552a05dc176617eaf04f1cbe31d86603dacc3e4';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}