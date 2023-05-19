import UsuarioSchema from "./../schemas/usuario.schema";

export class UsuarioService {
  async create(user) {
    const createdUser = await UsuarioSchema.create(user);
    return createdUser;
  }

  async update(id) {
    await UsuarioSchema.findByIdAndUpdate(id);
  }

  async list() {
    const userList = await UsuarioSchema.find();
    return userList;
  }

  async findUser(id?) {
    const user = await UsuarioSchema.find(id);
    return user;
  }

  async remove(id) {
    await UsuarioSchema.findByIdAndDelete(id);
  }
}
