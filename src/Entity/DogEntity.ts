import { DogEntityInterface } from "./DogEntityInterface";

export class DogEntity implements DogEntityInterface {
    
    private id: string;
    private name: string;

    getId(): string {
        return this.id;
    }
    
    setId(id: string): this {
        this.id = id;
        return this;
    }
    
    getName(): string {
        return this.name;
    }

    setName(name: string): this {
        this.name = name;
        return this;
    }
}
