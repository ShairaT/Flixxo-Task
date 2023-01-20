import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Token } from "./Token";

@Entity()
export class TokenQuote {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Token, (token) => token.quotes)
  token: Token;

  @Column()
  value: number;

  @Column()
  date: Date;

  @Column({ type: "timestamp" })
  createdAt: Date;

  @Column({ type: "timestamp" })
  updatedAt: Date;
}
