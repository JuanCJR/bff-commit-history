import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsersService } from 'src/services/profiles.service';
import { User } from 'src/entities/user.entity';
import { NotFoundResponse } from 'src/entities/response.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get(':username')
  @ApiResponse({
    status: 200,
    description: 'Get User successfully',
    type: User,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    type: NotFoundResponse,
  })
  async findUser(@Param('username') username: string) {
    return await this.userService.findUser(username);
  }
}
