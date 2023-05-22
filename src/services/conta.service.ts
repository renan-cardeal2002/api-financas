import contaSchema from "../schemas/conta.schema";

export class ContaService {
  async create(conta) {
    const createdUser = await contaSchema.create(conta);
    return createdUser;
  }

  async update(id, conta) {
    await contaSchema.updateOne(id, conta);
  }

  async list() {
    const userList = await contaSchema.find();
    return userList;
  }

  async findConta(id?) {
    const user = await contaSchema.find(id);
    return user;
  }

  async remove(id) {
    await contaSchema.findByIdAndDelete(id);
  }
}
