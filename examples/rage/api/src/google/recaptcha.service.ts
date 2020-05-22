import {AxiosResponse} from 'axios';
import * as FormData from 'form-data';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {googleRecaptchaAPI} from './recaptcha.axios';
import {ConfigEntity, ConfigRepository} from '../database/instinct/config';

@Injectable()
export class GoogleRecaptchaService {
  constructor(@InjectRepository(ConfigRepository) private readonly configRepo: ConfigRepository) {}

  async passedVerification(response: string): Promise<boolean> {
    const {googleRecaptchaSecretKey}: ConfigEntity = await this.configRepo.getConfig();

    const googleQuery: FormData = new FormData();
    googleQuery.append('response', response);
    googleQuery.append('secret', googleRecaptchaSecretKey);

    const {data}: AxiosResponse<Record<'success', boolean>> = await googleRecaptchaAPI.post(
      `siteverify?secret=${googleRecaptchaSecretKey}&response=${response}`
    );

    return data.success;
  }
}