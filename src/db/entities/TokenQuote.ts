import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Token } from "./Token";

@Entity('TokenQuote')
export class TokenQuote {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Token, (token) => token.quotes)
  token: Token;

  @Column({type: "int", nullable: false, name: "value"})
  value: number;

  @Column({ type: "timestamp" })
  createdAt: Date;

  @Column({ type: "timestamp" })
  updatedAt: Date;
}
