import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import Handlebars from 'handlebars';
import { join } from 'path';
import { DispararEmailController } from './disparar-email.controller';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com', //host do gmail,
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      defaults: {
        from: '"NO reply" <noreply>@gmail.com',
      },
      template: {
        dir: join('src', 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [DispararEmailController],
  providers: [],
})
export class DispararEmailModule {}
