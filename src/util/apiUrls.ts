export class ApiUrl {
  getUser(username: string) {
    return `users/${username}`;
  }

  getRepositories(username: string) {
    return `users/${username}/repos`;
  }
}
