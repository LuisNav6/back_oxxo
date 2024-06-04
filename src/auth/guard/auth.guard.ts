import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
    UnauthorizedException,
  } from "@nestjs/common";
  import { JwtService } from "@nestjs/jwt";
  import { Request } from "express";
  import { jwtConstants } from "../constants/jwt.constants";
  import { ROLES_KEY } from '../decorators/roles.decorator';
import { Reflector } from "@nestjs/core";
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService, private readonly reflector: Reflector) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
  
      if (!token) {
        throw new UnauthorizedException();
      }
  
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: jwtConstants.secret,
        });
        request.user = payload;
      } catch (error) {
        throw new UnauthorizedException();
      }

      const requiredRoles = this.reflector.getAllAndOverride<string[][]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
  
      if (requiredRoles && !this.hasRole(request.user, requiredRoles)) {
        throw new ForbiddenException('Insufficient permissions');
      }
  
      return true;
    }

    private getRequest(context: ExecutionContext): Request {
      return context.switchToHttp().getRequest();
    }
  
    private extractTokenFromHeader(request: Request) {
      const [type, token] = request.headers.authorization?.split(" ") ?? [];
      return type === "Bearer" ? token : undefined;
    }

    private hasRole(user: any, roles: string[][]): boolean {
      if (!user.rol) {
        return false;
      }
      return roles.some(roleSet => roleSet.includes(user.rol));
    }
  }
  