import { ApiProperty } from '@nestjs/swagger';
export class User {
  @ApiProperty()
  login: string;
  @ApiProperty()
  id: number;
  @ApiProperty()
  node_id: string;
  @ApiProperty()
  avatar_url: string;
  @ApiProperty()
  gravatar_id: string;
  @ApiProperty()
  url: string;
  @ApiProperty()
  html_url: string;
  @ApiProperty()
  followers_url: string;
  @ApiProperty()
  following_url: string;
  @ApiProperty()
  gists_url: string;
  @ApiProperty()
  starred_url: string;
  @ApiProperty()
  subscriptions_url: string;
  @ApiProperty()
  organizations_url: string;
  @ApiProperty()
  repos_url: string;
  @ApiProperty()
  events_url: string;
  @ApiProperty()
  received_events_url: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  site_admin: boolean;
  @ApiProperty()
  name: string;
  @ApiProperty()
  company?: any;
  @ApiProperty()
  blog: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  email?: any;
  @ApiProperty()
  hireable?: any;
  @ApiProperty()
  bio?: any;
  @ApiProperty()
  twitter_username?: any;
  @ApiProperty()
  public_repos: number;
  @ApiProperty()
  public_gists: number;
  @ApiProperty()
  followers: number;
  @ApiProperty()
  following: number;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
}
