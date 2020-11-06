import {GetSession} from '../session';
import {UserBan, UserBanDTO} from '@instinct-prj/interface';
import {HasScope} from '../session/permission-scope.decorator';
import {userBanDataTransferObjectToEntity, UserBanDTOClass} from './ban.dto';
import {
  UserBanRepository,
  UserEntity,
  UserRepository,
  userBanWire,
} from '../database/user';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Patch,
  Param,
} from '@nestjs/common';

@Controller('user/bans')
export class UserBanController {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userBanRepo: UserBanRepository
  ) {}

  @Post()
  @HasScope('websiteManageBans')
  async createBan(
    @Body() ban: UserBanDTOClass,
    @GetSession() session: UserEntity
  ): Promise<UserBan> {
    const user = await this.userRepo.getByID(ban.userID);
    const newBan = await this.userBanRepo.create(
      user.id!,
      user.ipCurrent,
      user.machineID ?? '',
      session.id!,
      ban.banStart,
      ban.banEnd
    );
    return userBanWire(newBan);
  }

  @Get()
  @HasScope('websiteManageBans')
  async getAllBans(): Promise<UserBan[]> {
    const bans = await this.userBanRepo.getAll();
    return bans.map(_ => userBanWire(_));
  }

  @Get(':banID')
  @HasScope('websiteManageBans')
  async getBanByID(@Param('banID') banID: number): Promise<UserBan> {
    const ban = await this.userBanRepo.getOneByID(banID);
    return userBanWire(ban);
  }

  @Patch(':banID')
  @HasScope('websiteManageBans')
  async updateBanByID(
    @Param('banID') banID: number,
    @Body() banDTO: UserBanDTO
  ): Promise<string> {
    await this.userBanRepo.updateByID(
      banID,
      userBanDataTransferObjectToEntity(banDTO)
    );
    return 'Your changes have been saved';
  }

  @Delete(':banID')
  @HasScope('websiteManageBans')
  async deleteBanByID(@Param('banID') banID: number): Promise<string> {
    await this.userBanRepo.deleteByID(banID);
    return 'Ban has been deleted';
  }
}
