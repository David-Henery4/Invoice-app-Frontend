import { useEffect, useState } from "react";

const useCheckInputValidations = (callbackSubmit) => {
  const [isListErrorsHere,setIsListErrorsHere] = useState(false)
  const [isInputErrors, setIsInputErrors] = useState({});
  const [validatedValues, setValidatedValues] = useState({});
  //
  const checkIfInputEmpty = (name, inputString) => {
    const newInputString = inputString.trim();
    if (newInputString.length <= 0) {
      setIsInputErrors((prevValues) => {
        return {
          ...prevValues,
          [name]: {
            isError: true,
            msg: "Can't be empty",
          },
        };
      });
    } else {
      setIsInputErrors((prevValues) => {
        const noError = { ...prevValues };
        delete noError[name];
        return noError;
      });
      //
      setValidatedValues((prevValues) => {
        return {
          ...prevValues,
          [name]: newInputString,
        };
      });
    }
  };
  //
  const checkIfAddressEmpty = (addressType, address) => {
    const { street, city, postCode, country } = address;

    if (street.length <= 0) {
      setIsInputErrors((prevValues) => {
        return {
          ...prevValues,
          [`${addressType}Street`]: {
            isError: true,
            msg: "Can't be empty",
          },
        };
      });
    } else {
      setIsInputErrors((prevValues) => {
        const noError = { ...prevValues };
        delete noError[`${addressType}Street`];
        return noError;
      });
      setValidatedValues((prevValues) => {
        return {
          ...prevValues,
          [`${addressType}Address`]: {
            ...prevValues[`${addressType}Address`],
            street,
          },
        };
      });
    }
    if (city.length <= 0) {
      setIsInputErrors((prevValues) => {
        return {
          ...prevValues,
          [`${addressType}City`]: {
            isError: true,
            msg: "Can't be empty",
          },
        };
      });
    } else {
      setIsInputErrors((prevValues) => {
        const noError = { ...prevValues };
        delete noError[`${addressType}City`];
        return noError;
      });
      setValidatedValues((prevValues) => {
        return {
          ...prevValues,
          [`${addressType}Address`]: {
            ...prevValues[`${addressType}Address`],
            city,
          },
        };
      });
    }
    if (postCode.length <= 0) {
      setIsInputErrors((prevValues) => {
        return {
          ...prevValues,
          [`${addressType}PostCode`]: {
            isError: true,
            msg: "Can't be empty",
          },
        };
      });
    } else {
      setIsInputErrors((prevValues) => {
        const noError = { ...prevValues };
        delete noError[`${addressType}PostCode`];
        return noError;
      });
      setValidatedValues((prevValues) => {
        return {
          ...prevValues,
          [`${addressType}Address`]: {
            ...prevValues[`${addressType}Address`],
            postCode,
          },
        };
      });
    }
    if (country.length <= 0) {
      setIsInputErrors((prevValues) => {
        return {
          ...prevValues,
          [`${addressType}Country`]: {
            isError: true,
            msg: "Can't be empty",
          },
        };
      });
    } else {
      setIsInputErrors((prevValues) => {
        const noError = { ...prevValues };
        delete noError[`${addressType}Country`];
        return noError;
      });
      setValidatedValues((prevValues) => {
        return {
          ...prevValues,
          [`${addressType}Address`]: {
            ...prevValues[`${addressType}Address`],
            country,
          },
        };
      });
    }
  };
  //
  const checkEmailValidation = (name, inputEmail) => {
    const trimmedEmail = inputEmail.trim();
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(trimmedEmail)
    ) {
      setIsInputErrors((prevValues) => {
        return {
          ...prevValues,
          [name]: {
            isError: true,
            msg: "Invalid Email",
          },
        };
      });
    } else {
      setIsInputErrors((prevValues) => {
        const noError = { ...prevValues };
        delete noError[name];
        return noError;
      });
      //
      setValidatedValues((prevValues) => {
        return { ...prevValues, [name]: trimmedEmail };
      });
    }
  };
  //
  const validation = (inputValues, isListErrors) => {
    const {
      clientEmail,
      description,
      clientName,
      clientAddress,
      senderAddress,
      items,
      paymentTerms,
      createdAt,
      paymentDue,
      total,
      invoiceId,
      status,
    } = inputValues;
    //
    checkIfInputEmpty("description", description);
    checkIfInputEmpty("clientName", clientName);
    //
    checkIfAddressEmpty("sender", senderAddress);
    checkIfAddressEmpty("client", clientAddress);
    //
    checkEmailValidation("clientEmail", clientEmail);
    //
    setIsListErrorsHere(isListErrors)
    //
    setValidatedValues((prevValues) => {
      return {
        ...prevValues,
        invoiceId,
        createdAt,
        paymentDue,
        paymentTerms,
        status,
        items,
        total,
      };
    });
  };
  //
  const submitOnceValidated = () => {
    if (
      Object.entries(isInputErrors).length <= 0 &&
      Object.entries(validatedValues).length >= 1 &&
      !isListErrorsHere
    ) {
      callbackSubmit(validatedValues)
      console.log("all values validated");
    }
  };
  //
  const resetInputErrors = () => {
    setIsInputErrors({})
  }
  //
  useEffect(() => {
    submitOnceValidated();
  }, [isInputErrors]);
  //
  return { validation, isInputErrors, resetInputErrors };
};

export default useCheckInputValidations;
