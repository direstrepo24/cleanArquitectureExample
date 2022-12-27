import * as core from "core";
import * as data from "data";
// una clase que genera estos objetos con sus dependencias dadas a ellos
/**
 * La clase CounterFactory se instancia con todas las dependencias que necesitamos 
 * para instanciar nuestro repositorio y caso de uso.
 *  No exponemos el repositorio, solo la interfaz que requiere.
 */
export class CounterFactory {
    private counterRepository: core.CounterRepository;

    constructor(private localStorageService: data.LocalStorageService) {
        this.counterRepository = new data.CounterRepositoryImpl(this.localStorageService);
    }

    getCreateCounterUsecase(): core.CreateCounterUsecase {
        return new core.CreateCounterUsecaseImpl(this.counterRepository);
    }
}