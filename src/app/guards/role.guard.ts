import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRoles = route.data['roles'] as Array<string>;
  const userRole = authService.getRole();

  if (authService.isLoggedIn() && expectedRoles && expectedRoles.includes(userRole || '' )) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
