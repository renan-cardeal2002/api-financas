import movimentoSchema from "../schemas/movimento.schema";

export class MovimentoService {
  async create(movimento) {
    const createdUser = await movimentoSchema.create(movimento);
    return createdUser;
  }

  async update(id) {
    await movimentoSchema.findByIdAndUpdate(id);
  }

  async list() {
    const userList = await movimentoSchema.find();
    return userList;
  }

  async findMovimento(id?) {
    const user = await movimentoSchema.find(id);
    return user;
  }

  async remove(id) {
    await movimentoSchema.findByIdAndDelete(id);
  }
}
