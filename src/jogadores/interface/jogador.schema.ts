import * as mongoose from 'mongoose';

export const JogadorSchema = new mongoose.Schema(
  {
    //id o mongo cria
    telefoneCelular: { type: String },
    email: { type: String, unique: true },
    nome: String,
    ranking: String,
    posicaoRanking: Number,
    urlFotoJogador: String,
  },
  { timestamps: true, collection: 'jogadores' },
);
