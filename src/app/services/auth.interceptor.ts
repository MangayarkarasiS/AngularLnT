import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).fetchToken()?.token || '';
  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(cloned);
};
