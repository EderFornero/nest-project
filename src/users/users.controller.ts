import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return [
      { id: 1, name: 'eder' },
      { id: 2, name: 'pepe' },
    ];
  }

  // @Get('ab*cd')
  // async findAll() {
  //   return 'This route uses a wildcard';
  // }

  @Get(':id')
  @HttpCode(HttpStatus.FOUND)
  async findById(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createNewUser: any) {
    return createNewUser;
  }

  @Patch(':id')
  async updateUser(@Body() updateNewUser: any, @Param('id') id: string) {
    return { id, updateNewUser };
  }
}
