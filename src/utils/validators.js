export const validateStepOne = (values) => {
  const errors = {};
  if (!values.firstName) errors.firstName = "Нэрээ оруулна уу";
  if (!values.lastName) errors.lastName = "Овгоо оруулна уу";
  if (!values.username) errors.username = "Хэрэглэгчийн нэрээ оруулна уу";
  return { errors, isValid: Object.keys(errors).length === 0 };
};

export const validateStepTwo = (values) => {
  const errors = {};

  if (!values.email) errors.email = "Мэйл хаягаа оруулна уу";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    errors.email = "Зөв email оруулна уу";

  if (!values.phone) errors.phone = "Утасны дугаараа оруулна уу";
  else if (!/^\d{8}$/.test(values.phone))
    errors.phone = "8 оронтой дугаар оруулна уу";

  if (!values.password) errors.password = "Нууц үг оруулана уу";
  else if (!/^\d{8}$/.test(values.password))
    errors.password = "Нууц үг 8 оронтой тоо байх ёстой";

  if (!values.confirmPassword)
    errors.confirmPassword = "Нууц үгээ давтаж оруулна уу";
  else if (values.password !== values.confirmPassword)
    errors.confirmPassword = "Нууц үг таарахгүй байна";

  return { errors, isValid: Object.keys(errors).length === 0 };
};
export const validateStepThree = (values) => {
  const errors = {};

  if (!values.profileImage) errors.profileImage = "Профайл зурагаа оруулна уу";

  if (!values.birthday) errors.birthday = "Төрсөн өдөр оруулна уу ";
  else {
    const today = new Date();
    const birthday = new Date(values.birthday);
    if (birthday > today) {
      errors.birthday = "Төрсөн өдөр одоогийн огнооноос өмнө байх ёстой";
    } else {
      const ageDifMs = today - birthday;
      const ageDate = new Date(ageDifMs);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
      if (age < 18) {
        errors.birthday = "Та 18 ба түүнээс дээш настай байх ёстой";
      }
    }
  }

  return { errors, isValid: Object.keys(errors).length === 0 };
};
