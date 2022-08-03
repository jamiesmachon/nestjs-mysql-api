import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';

import { UserEntity } from './user.entity';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [LocalStrategy, JwtStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
