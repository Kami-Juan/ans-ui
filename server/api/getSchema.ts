import util from 'util';
import ans from '@washingtonpost/ans-schema';

type SchemaType = {
  [key: string]: object;
};

const getSchemaForVersionAsync = util.promisify(ans.getSchemaForVersion);

export default defineEventHandler(async (event) => {
  const schemas = (await getSchemaForVersionAsync('0.10.9')) as SchemaType;

  return {
    schemas,
  };
});
