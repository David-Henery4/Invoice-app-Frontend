

const checkDynamicInputValidations = (items) => {
  const listErrorsList = [];
  const copyOfInputArray = [...items];
  copyOfInputArray.map((item) => {
    const itemErrors = {
      id: item.id,
      nameError: {
        isError: false,
        msg: "",
      },
      quantityError: {
        isError: false,
        msg: "",
      },
      priceError: {
        isError: false,
        msg: "",
      },
    };
    if (item.name.trim().length <= 0) {
      itemErrors.nameError = {
        isError: true,
        msg: "Can't be empty",
      };
    }
    if (item.quantity <= 0) {
      itemErrors.quantityError = {
        isError: true,
        msg: "Can't be empty",
      };
    }
    if (item.price <= 0) {
      itemErrors.priceError = {
        isError: true,
        msg: "Can't be empty",
      };
    }
    if (item.name.trim().length <= 0 || item.quantity <= 0 || item.price <= 0) {
      listErrorsList.push(itemErrors)
    } 
    return item;
  });

  const isListErrors = listErrorsList.length >= 1;
  return { listErrorsList, isListErrors };
};

export default checkDynamicInputValidations;
