export const saveFormValues = (values, step) => {
  localStorage.setItem(`formStep`, JSON.stringify({ ...values, step }));
};

export const retrieveFormValues = () => {
  const allSteps = JSON.parse(localStorage.getItem(`formStep`) || null);

  return allSteps;
};
