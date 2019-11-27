export const resolveNodes = list => {
  if (list) {
    const { edges } = list;
    if (edges) {
      const nodes = [];
      edges.map(edge => nodes.push(edge.node));
      return nodes;
    }
    return list;
  }
  return [];
};

export const fileExtension = filename => filename.split('.').pop();

export const generateFileName = () =>
  Math.random()
    .toString(6)
    .substring(2, 6) +
  Math.random()
    .toString(36)
    .substring(2, 4);

export const validateGQLResponse = (
  gql,
  errorFn,
  okFn,
  hideNotification = false
) => {
  if (gql && gql.error) {
    const { errors } = gql;
    if (!hideNotification) {
      notify({
        type: 'error',
        message: errorDict[errors].title,
        description: errorDict[errors].message
      });
    }
    return errorFn(errors);
  }
  return okFn();
};
