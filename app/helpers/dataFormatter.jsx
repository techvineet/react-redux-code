export const userRegFormatter = (data) => {
  let formData = new FormData();
  formData.append("user[reference]", data.reference);
  formData.append("user[first_name]", data.name[0]);
  formData.append("user[middle_name]", data.name[1]);
  formData.append("user[last_name]", data.name[2]);
  formData.append("user[email]", data.email);
  formData.append("user[phone]", `${data.phone[0]}-${(data.phone[1])}-${(data.phone[2])}`);
  data.states.forEach(val => formData.append("user[rental_state_ids][]", val));
  formData.append("user[password]", data.password);
  formData.append("user[password_confirmation]", data.confirmedPassword);

  return formData;
};

export const userProfileOutputFormatter = (data) => {
  let formData = new FormData();

  let userParams = ["firstName", "lastName", "middleName", "password", "passwordConfirmation", "currentPassword", "phone", "dob", "rentalStates", "notifyVia"];

  userParams.forEach((key) => {
    if(data[key]) {
      if(key == "rentalStates") {
        data.rentalStates.forEach(val => formData.append("user[rental_state_ids][]", val));
      }
      else {
        formData.append(`user[${toUnderscore(key)}]`, data[key]);
      }
    }
  });

  let addressParams = ["address1", "address2", "city", "state", "zip"];

  addressParams.forEach((key) => {
    if(data["homeAddress"] && data["homeAddress"][key]) {
      formData.append(`user[home_address_attributes][${toUnderscore(key)}]`, data["homeAddress"][key]);
    }
  });

  let companyParams = ["name", "mission", "goals", "strategy", "timeframe", "market", "criteria", "niche"];

  companyParams.forEach((key) => {
    if(data["company"] && data["company"][key]) {
      formData.append(`user[company_attributes][${toUnderscore(key)}]`, data["company"][key]);
    }
  });

  // formData.append("user[phone]", `${data.phone[0]}-${(data.phone[1])}-${(data.phone[2])}`);
  // data.states.forEach(val => formData.append("user[rental_state_ids][]", val));

  return formData;
};

export const userProfileInputFormatter = (data) => {
  let formatted = {};
  Object.keys(data).forEach((key) => {
    formatted[snakeToCamel(key)] = data[key];
  });

  return formatted;
};

export const testUnderScore = data => {
  const keys = Object.keys(data);
  let convertedData = {};

  for(let key of keys) {
    convertedData[toUnderscore(key)] = data[key];
  }

  console.log(convertedData);
};

export const toUnderscore = str => (
  str.replace(/(?:^|\.?)([A-Z])/g, function (x,y) {
    return "_" + y.toLowerCase();
  }).replace(/^_/, "")
);

export const snakeToCamel = str => {
  return str.replace(/(_\w)/g, function(m){return m[1].toUpperCase();});
};
