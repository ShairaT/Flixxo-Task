import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TokenQuote } from "./TokenQuote";

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @OneToMany((type) => TokenQuote, (quote) => quote.token)
  quotes: TokenQuote[];

  @Column({ type: "timestamp" })
  createdAt: Date;

  @Column({ type: "timestamp" })
  updatedAt: Date;
}
