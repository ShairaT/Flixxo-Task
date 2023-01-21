import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Token } from "./Token";

@Entity('TokenQuote')
export class TokenQuote {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Token, (token) => token.quotes)
  @JoinColumn()
  token: Token;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0, nullable: false, name: "value"})
  value: number;

  @Column({ type: "timestamp", nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
