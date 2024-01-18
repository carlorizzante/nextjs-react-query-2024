// import { ZodError } from 'zod';

export const parseError = (e: unknown) => {
  // if ((e as ZodError).issues?.length) return (e as ZodError).issues[0]?.message;
  if ((e as Error).message) return (e as Error).message;
  if (typeof e === 'string') return e;
  try {
    return String(e);
  } catch (_e) {
    console.log(e);
    return 'Unable to determine error.';
  }
}
