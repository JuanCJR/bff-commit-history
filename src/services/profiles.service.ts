import { Injectable, NotFoundException } from '@nestjs/common';

import { apiGet } from 'src/util/apiGet';
import { ApiURL } from 'src/util/apiUrls';
@Injectable()
export class UsersService {
  async findUser(username: string) {
    const user = await apiGet(ApiURL.GetUser, username);
    if (user.status === 404) {
      throw new NotFoundException(`User ${username} not found.`);
    }
    return user;
  }
}
