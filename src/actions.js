const UPDATEVALUE = "UPDATEVALUE";

export const updateInput = (e) => {
  const { name, value } = e.target;
  return {
    type: UPDATEVALUE,
    payload: {
      name: name,
      value: value,
    },
  };
};
