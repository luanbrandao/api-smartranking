import * as mongoose from 'mongoose';

export const JogadorSchema = new mongoose.Schema(
  {
    //id o mongo cria
    email: { type: String, unique: true },
    telefoneCelular: { type: String },
    nome: String,
    ranking: String,
    posicaoRanking: Number,
    urlFotoJogador: String,
  },
  { timestamps: true, collection: 'jogadores' },
);
