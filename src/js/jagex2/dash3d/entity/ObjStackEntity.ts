import Linkable from '../../datastruct/Linkable';

export default class ObjStackEntity extends Linkable {
    // constructor
    readonly index: number;
    count: number;

    constructor(index: number, count: number) {
        super();
        this.index = index;
        this.count = count;
    }
}
