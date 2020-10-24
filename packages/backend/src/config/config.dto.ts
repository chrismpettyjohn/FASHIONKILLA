import {ConfigDTO} from '@instinct/interface';
import {
  IsEmail,
  IsIP,
  IsNotEmpty,
  IsOptional,
  IsPort,
  IsString,
} from 'class-validator';

export class UpdateConfigDTO implements ConfigDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  siteName!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  siteLink!: string;

  @IsIP()
  @IsOptional()
  emulatorIP!: string;

  @IsPort()
  @IsOptional()
  emulatorPort!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfHabbo!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfExternalVariables!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfExternalTexts!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfProductData!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfFurniData!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfFigureData!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfBaseURL!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfBadgeURL!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfOverrideVariables!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  swfOverrideTexts!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  loadingMessage!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  groupBadgeURL!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  sendGridAPIKey!: string;

  @IsEmail()
  @IsOptional()
  sendGridAPISender!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  sendGridForgotPasswordTemplate!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  googleRecaptchaSiteKey!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  googleRecaptchaClientKey!: string;
}