import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { RepositoriesService } from 'src/services/repositories.service';

import { Repository } from 'src/entities/repositories.entity';
import { NotFoundResponse } from 'src/entities/response.entity';

@ApiTags('repositories')
@Controller('repositories')
export class RepositoriesController {
  constructor(private repositoryService: RepositoriesService) {}

  @Get(':username')
  @ApiResponse({
    status: 200,
    description: 'Get repositories successfully',
    type: Repository,
    isArray: true,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    type: NotFoundResponse,
  })
  async findRepos(
    @Param('username') username: string,
    @Query('page', ParseIntPipe) page: number,
    @Query('per_page', ParseIntPipe) per_page: number,
  ) {
    return await this.repositoryService.findRepos(username, page, per_page);
  }
}
