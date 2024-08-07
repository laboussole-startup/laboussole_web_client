import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { Router } from '@angular/router';

export const expertAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserServiceService);
  const router = inject(Router);

  const isAuthenticated = authService.isAuthenticated();
  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/expert-login']);
    return false;
  }
};
