import { Injectable, NotFoundException } from '@nestjs/common';

import { apiGet } from 'src/util/apiGet';
import { ApiUrl } from 'src/util/ApiUrls';
@Injectable()
export class UsersService {
  async findUser(username: string) {
    const apiUrl = new ApiUrl();

    const user = await apiGet(apiUrl.getUser(username));

    if (user.status === 404) {
      throw new NotFoundException(`User ${username} not found.`);
    }
    return user;
  }
}
