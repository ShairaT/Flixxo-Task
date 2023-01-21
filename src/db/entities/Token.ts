import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TokenQuote } from "./TokenQuote";

@Entity('Token')
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", length: 100, nullable: false, name: "name"})
  name: string;

  @Column({type: "varchar", length: 10, nullable: false, name: "code"})
  code: string;

  @OneToMany((type) => TokenQuote, (quote) => quote.token)
  quotes: TokenQuote[];

  @Column({ type: "timestamp", nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
