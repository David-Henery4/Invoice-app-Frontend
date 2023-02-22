
const checkDynamicInputValidations = (items,type) => {
  const errorsList = []
  const copyOfInputArray = [...items]
  copyOfInputArray.map(item => {
    const itemErrors = {
      nameError: {
        isError: false,
        msg: ""
      },
      quantityError: {
        isError: false,
        msg: ""
      },
      priceError:{
        isError: false,
        msg: ""
      },
    }
    if (item.name.trim().length <= 0){
      errorsList.push({
        ...itemErrors,
        nameError: {
          ...itemErrors.nameError,
          isError: true,
          msg: "Can't be empty",
        }
      })
    }
    if (item.quantity.trim().length <= 0){
      errorsList.push({
        ...itemErrors,
        quantityError: {
          ...itemErrors.quantityError,
          isError: true,
          msg: "Can't be empty",
        },
      });
    }
    if (item.price.trim().length <= 0){
      errorsList.push({
        ...itemErrors,
        priceError: {
          ...itemErrors.priceError,
          isError: true,
          msg: "Can't be empty",
        },
      });
    }
    return item
  })

  const isErrors = errorsList.length >= 1
  return {errorsList, isErrors}

}

export default checkDynamicInputValidations