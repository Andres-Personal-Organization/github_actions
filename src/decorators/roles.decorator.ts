import { SetMetadata } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Roles = (module, ...actions: any[]) => SetMetadata('authPermissions', { module, actions });
