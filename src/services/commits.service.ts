import { Injectable, NotFoundException } from '@nestjs/common';

import { apiGet } from 'src/util/apiGet';
import { ApiUrl } from 'src/util/ApiUrls';

@Injectable()
export class CommitsService {
  async findCommits(
    username: string,
    repoName: string,
    page: number,
    per_page: number,
  ) {
    const apiUrl = new ApiUrl();

    const commits = await apiGet(apiUrl.getCommits(username, repoName), {
      page: page,
      per_page: per_page,
    });

    if (commits.status === 404) {
      throw new NotFoundException(
        `Commits for the repository ${repoName} by ${username} usernmae not found.`,
      );
    }

    const groupedCommits = commits
      .reduce((acumulator, commit) => {
        const commitDate = new Date(commit.commit.author.date).toDateString();
        const isAddedIndex = acumulator.findIndex(
          (item) => item.date === commitDate,
        );

        if (isAddedIndex < 0) {
          acumulator.push({ date: commitDate, commits: [commit] });
          return acumulator;
        } else {
          acumulator[isAddedIndex].commits.push(commit);
          return acumulator;
        }
      }, [])
      .sort((a, b) => a < b);

    return groupedCommits;
  }
}
