import SuperAdmin from '../models/superAdmin.model'



const createSuperHandler = async (
  firstname: string,
  lastname: string,
  email: string,
  hashedPass: string,
  phone: string
) => {
  const createData = await SuperAdmin.create({
    firstname: firstname,
    lastname: lastname,
    email: email.toLowerCase(),
    password: hashedPass,
    phone: phone,
  });
  return createData;
};

const findSuperUser = async () => {
  const user = await SuperAdmin.find({});
  return user;
};

export {
  createSuperHandler, findSuperUser
}