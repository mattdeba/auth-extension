import { Module } from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { BcryptService } from './hashing/bcrypt.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    { provide: HashingService, useClass: BcryptService },
    AuthenticationService,
  ],
  controllers: [AuthenticationController],
  //chaque fois que le jeton(token) du service de hachage(HashingService) sera résolu,
  // il pointera vers le service bcrypt(BcryptService)
  //HashingService est une interface abstraite
  //BcryptService est une implémentation concrète de l'interface HashingService
})
export class IamModule {}
