interface IRect {
    readonly id: string    // read only modifier
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: IRect = {
    id: '123',
    size: {
        width: 200,
        height: 200
    },
    color: '#ccc'
};
const rect2: IRect = {
    id: '12334',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black';

const rect3 = {} as IRect;
const rect4 = <IRect>{};

//===============================================

interface IRectWithArea extends IRect {
    getArea: () => number
}

const rect5: IRectWithArea = {
    id: "123",
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

//===============================================
interface IClock {
    time: Date

    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

//=================================================
interface IStyles {
    [key: string]: string
}

const css: IStyles = {
    border: '1px solid black',
    margin: '2px'
}
