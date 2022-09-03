import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// podes agregar token con roles especificos
export class JwtAuthGuard extends AuthGuard('jwt') {}
