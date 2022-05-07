import { Injectable, NotFoundException } from '@nestjs/common';

import { apiGet } from 'src/util/apiGet';
import { ApiUrl } from 'src/util/ApiUrls';
@Injectable()
export class RepositoriesService {
  async findRepos(username: string, page: number, per_page: number) {
    const apiUrl = new ApiUrl();

    const repositories = await apiGet(apiUrl.getRepositories(username), {
      page: page,
      per_page,
    });

    if (repositories.status === 404) {
      throw new NotFoundException(
        `Repositories for the user ${username} not found.`,
      );
    }
    return repositories;
  }
}
