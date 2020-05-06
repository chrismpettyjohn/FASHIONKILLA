import { NewSessionDTO } from './session.dto';
import { User } from 'instinct-interfaces';
import { SessionService } from './session.service';
import { UserService } from '../user/user.service';
import { HasSession } from './has-session.decorator';
import { GetSession } from './get-session.decorator';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity, userWire } from '../database/entity/user';

@Controller('session')
export class SessionController {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService
  ) {}

  @Post()
  createSession(@Body() newSession: NewSessionDTO): Promise<string> {
    return this.sessionService.loginWithCredentials(newSession.username, newSession.password);
  }

  @Post('sso')
  @HasSession()
  async createSSO(@GetSession() session: UserEntity): Promise<string> {
    return await this.userService.createSSO(session.id!);
  }

  @Get()
  @HasSession()
  getSession(@GetSession() session: UserEntity): User {
    return userWire(session);
  }
}