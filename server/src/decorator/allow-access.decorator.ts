import "reflect-metadata";

export const ALLOWED_SERVICES_KEY = Symbol("ALLOWED_SERVICES");

/**
 * Class decorator to define which services can access this repository
 */
export function AllowAccessFrom(services: Function[]): ClassDecorator {
  return function (target: any) {
    Reflect.defineMetadata(ALLOWED_SERVICES_KEY, services, target);
  };
}
