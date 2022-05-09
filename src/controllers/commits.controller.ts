import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { CommitsService } from 'src/services/commits.service';
import { NotFoundResponse } from 'src/entities/response.entity';
import { CommitInfo } from 'src/entities/commit.entity';

@ApiTags('commits')
@Controller('commits')
export class CommitsController {
  constructor(private commitsService: CommitsService) {}
  @Get(':username/:repoName')
  @ApiResponse({
    status: 200,
    description: 'Get repositories successfully',
    type: CommitInfo,
    isArray: true,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    type: NotFoundResponse,
  })
  async findCommits(
    @Param('username') username: string,
    @Param('repoName') repoName: string,
    @Query('page', ParseIntPipe) page: number,
    @Query('per_page', ParseIntPipe) per_page: number,
  ) {
    return await this.commitsService.findCommits(
      username,
      repoName,
      page,
      per_page,
    );
  }
}
