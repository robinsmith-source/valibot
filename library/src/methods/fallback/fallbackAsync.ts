import type { BaseSchemaAsync, Output } from '../../types/index.ts';
import { schemaResult } from '../../utils/index.ts';
import { getFallbackAsync } from '../getFallback/index.ts';
import type { FallbackInfo } from './types.ts';

/**
 * Fallback async type.
 */
export type FallbackAsync<TSchema extends BaseSchemaAsync> =
  | Output<TSchema>
  | ((info?: FallbackInfo) => Output<TSchema> | Promise<Output<TSchema>>);

/**
 * Schema with fallback async type.
 */
export type SchemaWithFallbackAsync<
  TSchema extends BaseSchemaAsync = BaseSchemaAsync,
  TFallback extends FallbackAsync<TSchema> = FallbackAsync<TSchema>,
> = TSchema & {
  /**
   * The fallback value.
   */
  fallback: TFallback;
};

/**
 * Returns a fallback output value when validating the passed schema failed.
 *
 * @param schema The schema to catch.
 * @param fallback The fallback value.
 *
 * @returns The passed schema.
 */
export function fallbackAsync<
  TSchema extends BaseSchemaAsync,
  const TFallback extends FallbackAsync<TSchema>,
>(
  schema: TSchema,
  fallback: TFallback
): SchemaWithFallbackAsync<TSchema, TFallback> {
  return {
    ...schema,
    fallback,
    async _parse(input, config) {
      const result = await schema._parse(input, config);
      return result.issues
        ? schemaResult(
            true,
            await getFallbackAsync(this, { input, issues: result.issues })
          )
        : result;
    },
  };
}
