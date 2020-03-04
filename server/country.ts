const {Column, Entity, PrimaryGeneratedColumn} = require('typeorm');
@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isoCode: string;

    @Column()
    Region: string;

    @Column()
    Population: boolean;
}

