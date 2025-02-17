import { IObserver } from '../interfaces/IObserver';

export class TodoObserver {
    private observers: IObserver[] = [];

    addObserver(observer: IObserver) {
        this.observers.push(observer);
    }

    notifyObservers(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}
