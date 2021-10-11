/*
* 1. Работа с простыми типами
* */

import * as events from "events";

function concat(left:string, right:string) {
    return left + right
}

concat('Hello ', 'World')

/*
* 2. Работа с интерфейсами
* */

interface IHomework {
    howIDoIt: string;
    simeArray: any[];
    withData?: IHomework[];
}

const MyHomeTask:IHomework = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

/*
* 3. Типизация функций, используя Generic
* */

interface IReduce<T> {
    reduce<U>(fn: (accumulator: T, currentValue: T) => U, initialValue: number): U;
}

const myArr: IReduce<number> = [0, 1, 2, 3, 4]

const initialValue = 0;
myArr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

/*
* 4. Работа с MappedTypes
* */

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
};

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}



/*
* 5*. Работа с Generic, Mapped Types, Type inference №1
* */

/*
*  6*. Работа с Generic, Mapped Types, Type inference №2
* */