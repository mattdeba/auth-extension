import { Module } from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { BcryptService } from './hashing/bcrypt.service';

@Module({
  providers: [{ provide: HashingService, useClass: BcryptService }],
  //chaque fois que le jeton(token) du service de hachage(HashingService) sera résolu,
  // il pointera vers le service bcrypt(BcryptService)
  //HashingService est une interface abstraite
  //BcryptService est une implémentation concrète de l'interface HashingService
})
export class IamModule {}
