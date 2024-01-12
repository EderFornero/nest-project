import {
  Body,
  Controller,
  Delete,
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

  @Get('ab*cd')
  async wildCarFunction() {
    return 'This route uses a wildcard';
  }

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
  @HttpCode(HttpStatus.CREATED)
  async updateUser(@Body() updateNewUser: any, @Param('id') id: string) {
    return { id, updateNewUser };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param() params: any) {
    return {
      params,
      text: 'usuario eliminado',
    };
  }
}
