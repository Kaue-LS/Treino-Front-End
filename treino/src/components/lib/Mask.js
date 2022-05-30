export const maskPrice = (value) => {
    return value
    .replace(/[a-z A-Z!@#¨$%^&*)(+=._-]+/g, "")
    .replace(/(\d{0})(\d)/, "R$ $1$2")
  };
  