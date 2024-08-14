import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { CoffeeRatingService } from './coffee-rating.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule.register({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',

  }), CoffeesModule],
  providers: [CoffeeRatingService],
  exports: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
