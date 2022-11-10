import { Specification } from "../../model/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private specifictions: Specification[];

    constructor() {
        this.specifictions = [];
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifictions.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifictions.find(
            specification => specification.name === name,
        );
        return specification;
    }
}

export { SpecificationsRepository };
