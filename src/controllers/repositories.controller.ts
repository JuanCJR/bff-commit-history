import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { RepositoriesService } from 'src/services/repositories.service';

import { Owner } from 'src/entities/repositories.entity';
import { NotFoundResponse } from 'src/entities/response.entity';

@ApiTags('repositories')
@Controller('repositories')
export class RepositoriesController {
  constructor(private repositoryService: RepositoriesService) {}

  @Get(':username')
  @ApiResponse({
    status: 200,
    description: 'Get repositories successfully',
    type: Owner,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    type: NotFoundResponse,
  })
  findRepos(
    @Param('username') username: string,
    @Query('page', ParseIntPipe) page: number,
    @Query('page', ParseIntPipe) per_page: number,
  ) {}
}
